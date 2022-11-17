import './App.css';
import useSights from "./hooks/useSights";
import SightGallery from "./components/SightGallery";
import NavBar from "./components/NavBar";
import {HashRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateSightPage from "./pages/CreateSightPage";
import SightDetailPage from "./pages/SightDetailPage";
import {ToastContainer} from "react-toastify";
import useAppUsers from "./hooks/useAppUsers";
import UseWeatherObject from "./hooks/useWeatherObject";



function App() {

  const { sights, addNewSight, updateSight, deleteSightById } = useSights();
  const { me, login, logout, register, addNewSightToFavoriteListUser, deleteSightFromFavoriteListeUser } = useAppUsers();
  const { weatherObject } = UseWeatherObject();


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
                  <NavBar  me={me} login={login} logout={logout} register={register}/>
                  <Routes>
                      < Route path={"/homepage"} element={<Homepage/>}  />
                      < Route path={"/"} element={<SightGallery  sights={sights} weatherObject={weatherObject}  me={me} addNewSightToFavoriteListUser={addNewSightToFavoriteListUser} deleteSightFromFavoriteListeUser={deleteSightFromFavoriteListeUser}  />}  />
                      < Route path={"/sights/:id"} element={<SightDetailPage  sights={sights}  updateSight={updateSight}  deleteSightById={deleteSightById}/>}  />
                      < Route path={"/form"} element={<CreateSightPage addNewSight={addNewSight}/>}  />
                  </Routes>
              </HashRouter>
          </header>
      </div>
  );
}

export default App;
