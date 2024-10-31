import express from "express";
import mongoose from "mongoose";
import dontev from "dotenv";
import cors from "cors";
import router from "./routes/router.js";

dontev.config();
const app = express();
const PORT_SERVER = 3100;
mongoose
  .connect("mongodb://localhost/espectral")
  .then(() => console.log("Conexion exitosa a la base de datos"))
  .catch((err) => console.log(err));



// Middleware
app.use(cors());
app.use(express.json());

app.listen(PORT_SERVER, () => {
  console.log(
    `Servidor corriendo correctamente en: http://localhost:${PORT_SERVER}`
  );
});

app.use("/", router);
