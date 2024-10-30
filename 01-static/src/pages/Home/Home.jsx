import DetectBands from "../DetectBands"
import { BandDetection, InstrumentsUsed, MultispectralApplications, MultispectralDefinition, MultispectralFunctionality, PagesEspectral } from "./components"

const Home = () =>{
    return(
        <div className="content-info" id="inf-home">
            <MultispectralDefinition></MultispectralDefinition>
            <MultispectralFunctionality></MultispectralFunctionality>
            <InstrumentsUsed></InstrumentsUsed>
            <MultispectralApplications></MultispectralApplications>
            <BandDetection></BandDetection>
            <PagesEspectral></PagesEspectral>
            <div className="up-button">
        <a href="#inf-home">
          <i className="material-icons">
          arrow_upward
            </i>
        </a>
      </div>
        </div>
    )
}
export default Home