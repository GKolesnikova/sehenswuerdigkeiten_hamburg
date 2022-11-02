import './App.css';
import useSights from "./hooks/useSights";
import SightGallery from "./components/SightGallery";
import NavBar from "./components/NavBar";
import {HashRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateSightPage from "./pages/CreateSightPage";
import SightDetailPage from "./pages/SightDetailPage";



function App() {

  const {sight, sights, getAllSights, addNewSight, updateSight, deleteSightById} = useSights();


  return (
      <div className="App">
          <header>
              <HashRouter>
                  <NavBar/>
                  <Routes>
                      < Route path={"/homepage"} element={<Homepage/>}  />
                      < Route path={"/"} element={<SightGallery  sights={sights}  getAllSights={getAllSights}    />}  />
                      < Route path={"/sights/:id"} element={<SightDetailPage  sight={sight}  sights={sights}  updateSight={updateSight}  deleteSightById={deleteSightById}/>}  />

                      < Route path={"/form"} element={<CreateSightPage addNewSight={addNewSight}/>}  />
                  </Routes>
              </HashRouter>
          </header>
      </div>
  );
}

export default App;
