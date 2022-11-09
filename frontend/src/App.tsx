import './App.css';
import useSights from "./hooks/useSights";
import SightGallery from "./components/SightGallery";
import NavBar from "./components/NavBar";
import {HashRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateSightPage from "./pages/CreateSightPage";
import SightDetailPage from "./pages/SightDetailPage";
import {ToastContainer} from "react-toastify";
import useFavoriteList from "./hooks/useFavoriteList";



function App() {

 
  const {sight, sights, getAllSights, addNewSight, updateSight, deleteSightById} = useSights();
  const {favoriteList, favoriteLists, getAllFavoriteListe, getFavoriteList, addNewSightInFavoriteListe, deleteFavoriteList, deleteSightFromFavoriteListe} = useFavoriteList();
 


  return (
      <div className="App">
          <ToastContainer position="top-right"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="light"/>
          <header>
              <HashRouter>
                  <NavBar/>
                  <Routes>
                      < Route path={"/homepage"} element={<Homepage/>}  />
                      < Route path={"/"} element={<SightGallery  sights={sights}  getAllSights={getAllSights}  addNewSightInFavoriteListe={addNewSightInFavoriteListe} deleteSightFromFavoriteListe={deleteSightFromFavoriteListe}  favoriteList={favoriteList}/>}  />
                      < Route path={"/sights/:id"} element={<SightDetailPage  sights={sights}  updateSight={updateSight}  deleteSightById={deleteSightById}/>}  />

                      < Route path={"/form"} element={<CreateSightPage addNewSight={addNewSight}/>}  />
                  </Routes>
              </HashRouter>
          </header>
      </div>
  );
}

export default App;
