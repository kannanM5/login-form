import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from "./main/main";
import Table from "./main/table";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/move" element={<Table />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
