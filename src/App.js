import "./App.css";
import Navbar from "./navbar";
import Newprice from "./newprice";
import Yourlist from "./yourlist";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/yourlist" element={<Yourlist />} />
            <Route path="/newprice" element={<Newprice />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
