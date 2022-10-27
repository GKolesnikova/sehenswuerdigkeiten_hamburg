import './App.css';
import useSights from "./hooks/useSights";
import SightGallery from "./components/SightGallery";



function App() {


  const {sights, deleteSightById } = useSights();





  return (
    <div className="App">
        <SightGallery sights={sights} deleteSightById={deleteSightById}/>
    </div>
  );
}

export default App;
