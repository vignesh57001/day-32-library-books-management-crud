import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create_book from "./Create_book";
import View_book from "./View_book";
import Update_book from "./Update_book";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Books from "./Books";

function App() {
  return (
    <div className="total-body">
      <div className="main">
        <h1>Books Library Management - CRUD Operation</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      {/* <div className="frame">
        <button className="custom-btn btn-12 button-rotate">
          <span>Click!</span>
          <span>Home</span>
        </button>
        <button className="custom-btn btn-12 button-rotate">
          <span>Click!</span>
          <span>Create Book</span>
        </button>
        <button className="custom-btn btn-12 button-rotate">
          <span>Click!</span>
          <span>Books - Table</span>
        </button>
        <button className="custom-btn btn-12 button-rotate">
          <span>Click!</span>
          <span>Books - Cards</span>
        </button>
      </div> */}

      <div className="page-routes">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/books" element={<Books />} />
            <Route path="/create-book" element={<Create_book />} />
            <Route path="/view-book" element={<View_book />} />
            <Route path="/update-book" element={<Update_book />} />
          </Routes>
        </BrowserRouter>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
