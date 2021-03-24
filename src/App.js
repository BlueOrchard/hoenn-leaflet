import Map from "./components/map/Map";
import './util/normalize.css'
import './App.scss'
import Sidebar from "./components/sidebar/Sidebar";

function App(){
    return(
        <div className="app">
            <Sidebar />
            <Map/>
        </div>
    )
}

export default App;