import { Routes, Route } from "react-router-dom";
import './App.scss';
import Home from "./Containers/Home";
import Pagination from "./Containers/Pagination/Pagination";
import Headers from "./Components/Headers/Headers";
import CountdownTimer from "./Containers/CountdownTimer/CountdownTimer";
import LazyLoading from "./Containers/LazyLoading/LazyLoading";
import StarRating from "./Containers/StarRating/StarRating";

function App() {
    return ( 
        <div className = "App">
        <Headers />
        <Routes>
            <Route path="/" element={<Home />}> 
                <Route path="/pagination" element={<Pagination />} />
                <Route path="/countdown-timer" element={<CountdownTimer />} />
                <Route path="/lazy-loading" element={<LazyLoading />} />
                <Route path="/star-rating" element={<StarRating />} />
            </Route>
        </Routes>
       </div>
    );
}

export default App;