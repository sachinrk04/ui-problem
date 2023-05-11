import { Routes, Route } from "react-router-dom";
import './App.scss';
import Home from "./Containers/Home";
import Pagination from "./Containers/Pagination/Pagination";
import Headers from "./Components/Headers/Headers";

function App() {
    return ( 
        <div className = "App">
        <Headers />
        <Routes>
            <Route path="/" element={<Home />}> 
                <Route path="/pagination" element={<Pagination />} />
            </Route>
        </Routes>
       </div>
    );
}

export default App;