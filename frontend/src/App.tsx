import './App.css';
import useSights from "./hooks/useSights";
import SightGallery from "./components/SightGallery";
import NavBar from "./components/NavBar";
import {HashRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateSightPage from "./pages/CreateSightPage";



function App() {

  const {sights, getAllSights, addNewSight, deleteSightById} = useSights();


  return (
      <div className="App">
          <header>
              <HashRouter>
                  <NavBar/>
                  <Routes>
                      < Route path={"/homepage"} element={<Homepage/>}  />
                      < Route path={"/"} element={<SightGallery  sights={sights}  getAllSights={getAllSights} addNewSight={addNewSight} deleteSightById={deleteSightById}/>}  />

                      < Route path={"/form"} element={<CreateSightPage addNewSight={addNewSight}/>}  />
                  </Routes>
              </HashRouter>
          </header>
      </div>
  );
}

export default App;
