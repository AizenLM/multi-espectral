import DetectBands from "../DetectBands";
import {
  BandDetection,
  InstrumentsUsed,
  MultispectralApplications,
  MultispectralDefinition,
  MultispectralFunctionality,
  PagesEspectral,
} from "./components";
import Layout from "../../layout/Layout";


const Home = () => {
    
  return (
    <>
    <Layout>
    <div className="content-info" id="inf-home">
      <MultispectralDefinition></MultispectralDefinition>
      <MultispectralFunctionality></MultispectralFunctionality>
      <InstrumentsUsed></InstrumentsUsed>
      <MultispectralApplications></MultispectralApplications>
      <BandDetection></BandDetection>
      <PagesEspectral></PagesEspectral>
      <div className="up-button">
        <a href="#inf-home">
          <i className="material-icons">arrow_upward</i>
        </a>
      </div>
    </div>
    </Layout>
    </>
  );
};
export default Home;
