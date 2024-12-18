import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Headers from "./Components/Headers/Headers";
import Home from "./Containers/Home";
import Pagination from "./Containers/Pagination/Pagination";
import TodoComment from "./Containers/TodoComment/TodoComment";
import CountdownTimer from "./Containers/CountdownTimer/CountdownTimer";
import EditableExcelTable from "./Containers/EditableExcelTable/EditableExcelTable";
import Whiteboard from "./Containers/Whiteboard/Whiteboard";
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
import PlayersSelect from "./Containers/PlayersSelect/PlayersSelect";
import CodeEditor from "./Containers/CodeEditor/CodeEditor";
import AddUserInList from "./Containers/AddUserInList/AddUserInList";
import TableEditable from "./Containers/TableEditable/TableEditable";
import Checkbox from "./Containers/Checkbox/Checkbox";
import DropDown from "./Containers/DropDown/DropDown";
import StickyNote from "./Containers/StickyNote/StickyNote";
import DragAndDropNotes from "./Containers/DragAndDropNotes/DragAndDropNotes";
import CounterContextApi from "./Containers/CounterContextApi/CounterContextApi";
import CommonTable from "./Containers/CommonTable/CommonTable";
import TrelloBoard from "./Containers/TrelloBoard/TrelloBoard";
import MakeSideBar from "./Containers/MakeSideBar/MakeSideBar";
import NestedBox from "./Containers/NestedBox/NestedBox";

function App() {
  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="make-sidebar" element={<MakeSideBar />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/todo-comment" element={<TodoComment />} />
          <Route path="/countdown-timer" element={<CountdownTimer />} />
          <Route path="/counter-context-api" element={<CounterContextApi />} />
          <Route
            path="/editable-excel-table"
            element={<EditableExcelTable />}
          />
          <Route path="/checkbox" element={<Checkbox />} />
          <Route path="/dropdown" element={<DropDown />} />
          <Route path="/sticky-note" element={<StickyNote />} />
          <Route path="/drag-and-drop-notes" element={<DragAndDropNotes />} />
          <Route path="/white-board" element={<Whiteboard />} />
          <Route path="/lazy-loading" element={<LazyLoading />} />
          <Route path="/star-rating" element={<StarRating />} />
          <Route path="/text-search" element={<TextSearch />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/table" element={<Table />} />
          <Route path="/common-table" element={<CommonTable />} />
          <Route path="/table-editable" element={<TableEditable />} />
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
          <Route path="/trello-board" element={<TrelloBoard />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route
            path="/pie-char-range-input"
            element={<PieChartRangeInput />}
          />
          <Route path="/nested-box" element={<NestedBox />} />
          <Route path="/css-doodle" element={<CssDoodle />} />
          <Route
            path="/children-parents-re-renders"
            element={<ChildrenParentsRerenders />}
          />
          <Route path="/text-to-speech" element={<TextToSpeech />} />
          <Route path="/players-select" element={<PlayersSelect />} />
          <Route path="/add-user-in-list" element={<AddUserInList />} />
          <Route path="/code-editor" element={<CodeEditor />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
