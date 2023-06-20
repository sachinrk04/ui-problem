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
import Accordion from "./Containers/Accordion/Accordion";
import QuoteGenerator from "./Containers/QuoteGenerator/QuoteGenerator";
import VideoPlayer from "./Containers/VideoPlayer/VideoPlayer";
import BMICalculator from "./Containers/BMICalculator/BMICalculator";
import LoadingImages from "./Containers/LoadingImages/LoadingImages";
import GitHubUserSearch from "./Containers/GitHubUserSearch/GitHubUserSearch";
import EMICalculator from "./Containers/EMICalculator/EMICalculator";
import LoginForm from "./Containers/LoginForm/LoginForm";
import ThrottleDebounce from "./Containers/ThrottleDebounce/ThrottleDebounce";
import ShoppingCart from "./Containers/ShoppingCart/ShoppingCart";
import PieChartRangeInput from "./Containers/PieChartRangeInput/PieChartRangeInput";
import CssDoodle from "./Containers/CssDoodle/CssDoodle";
import ChildrenParentsRerenders from "./Containers/ChildrenParentsRerenders/ChildrenParentsRerenders";
import TextToSpeech from "./Containers/TextToSpeech/TextToSpeech";

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
                    <Route path="/accordion" element={<Accordion />} />
                    <Route path="/quote-generator" element={<QuoteGenerator />} />
                    <Route path="/video-player" element={<VideoPlayer />} />
                    <Route path="/BMI-calculator" element={<BMICalculator />} />
                    <Route path="/loading-images" element={<LoadingImages />} />
                    <Route path="/github-user-search" element={<GitHubUserSearch />} />
                    <Route path="/EMI-calculator" element={<EMICalculator />} />
                    <Route path="/login-form" element={<LoginForm />} />
                    <Route path="/throttle-debounce" element={<ThrottleDebounce />} />
                    <Route path="/shopping-cart" element={<ShoppingCart />} />
                    <Route path="/pie-char-range-input" element={<PieChartRangeInput />} />
                    <Route path="/css-doodle" element={<CssDoodle />} />
                    <Route path="/children-parents-re-renders" element={<ChildrenParentsRerenders />} />
                    <Route path="/text-to-speech" element={<TextToSpeech />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;