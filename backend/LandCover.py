import json
import pandas as pd
import geopandas as gpd
import numpy as np
import rasterio as rio
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from io import BytesIO
from matplotlib import pyplot as plt
from sklearn.metrics import classification_report, confusion_matrix, ConfusionMatrixDisplay
from PIL import Image

# Load static data
lc_dir = 'lc.json'
points_dir = 'geojson/points.geojson'

try:
    lc = json.load(open(lc_dir))
except FileNotFoundError:
    lc = {}
    print(f"Error: File {lc_dir} not found.")

lc_df = pd.DataFrame(lc)
lc_df["values_normalize"] = lc_df.index + 1
lc_df["palette"] = "#" + lc_df["palette"]
palette = lc_df["palette"].to_list()
labels = lc_df["label"].to_list()
dict_palette = {i + 1: palette[i] for i in range(len(palette))}

# Utility functions
def normalize_band(band):
    """Normalize band values to the range [0, 1]."""
    if band.max() - band.min() == 0:
        return np.zeros_like(band)
    return (band - band.min()) / (band.max() - band.min())

def prepare_sample():
    """Prepare GeoJSON sample data."""
    try:
        sample = gpd.read_file(points_dir)
        sample['lc'] = sample['lc'].astype(str)
        sample["value"] = sample["lc"].map({v: k + 1 for k, v in enumerate(lc_df["values"].to_list())})
        return sample
    except FileNotFoundError:
        print(f"Error: File {points_dir} not found.")
        return gpd.GeoDataFrame()

def train_model(sample, s2_image_path):
    """Train the random forest classifier."""
    s2 = rio.open(s2_image_path)
    coords = [(x.x, x.y) for x in sample["geometry"]]
    all_bands = np.stack([x for x in s2.sample(coords)])
    reflectance_bands = all_bands[:, :-1] / 1e4
    ndvi_band = all_bands[:, -1]

    sample[["B2", "B3", "B4", "B5", "B6", "B7", "B8"]] = reflectance_bands
    sample["NDVI"] = ndvi_band

    # Train model
    X = sample[['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'NDVI']]
    Y = sample['value']
    x_train, x_test, y_train, y_test = train_test_split(X, Y, train_size=0.7, random_state=42)
    rf_model = RandomForestClassifier(random_state=42)
    rf_model.fit(x_train, y_train)

    return rf_model, x_test, y_test

def plot_confusion_matrix(y_test, y_pred):
    """Generate confusion matrix plot."""
    cm = confusion_matrix(y_test, y_pred)
    ConfusionMatrixDisplay(cm).plot(cmap="viridis")
    plt.tight_layout()

    # Convert confusion matrix to PNG
    output = BytesIO()
    plt.savefig(output, format="png")
    output.seek(0)
    return output
