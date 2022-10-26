import './App.css';
import useSights from "./hooks/useSights";
import SightGallery from "./components/SightGallery";



function App() {


  const {sights, getAllSights} = useSights();





  return (
    <div className="App">
        <SightGallery sights={sights}/>
    </div>
  );
}

export default App;
