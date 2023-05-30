import { Routes, Route } from "react-router-dom";
import './App.scss';
import Home from "./Containers/Home";
import Pagination from "./Containers/Pagination/Pagination";
import Headers from "./Components/Headers/Headers";
import CountdownTimer from "./Containers/CountdownTimer/CountdownTimer";
import LazyLoading from "./Containers/LazyLoading/LazyLoading";
import StarRating from "./Containers/StarRating/StarRating";
import TextSearch from "./Containers/TextSearch/TextSearch";
import Carousel from "./Containers/Carousel/Carousel";
import Table from "./Containers/Table/Table";
import Stopwatch from "./Containers/Stopwatch/Stopwatch";
import Todo from "./Containers/Todo/Todo";
import FolderStructure from "./Containers/FolderStructure/FolderStructure";
import InfinteScroll from "./Containers/InfinteScroll/InfinteScroll";

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
                <Route path="/text-search" element={<TextSearch />} />
                <Route path="/carousel" element={<Carousel />} />
                <Route path="/table" element={<Table />} />
                <Route path="/stop-watch" element={<Stopwatch />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/folder-structure" element={<FolderStructure />} />
                <Route path="/infinte-scroll" element={<InfinteScroll />} />
            </Route>
        </Routes>
       </div>
    );
}

export default App;