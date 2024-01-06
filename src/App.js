import logo from "./logo.svg";
import "./App.css";
import Login from "./login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MissionGrid from "./dashboard";
import PieChart from "./piechart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />

        <Route exact path="/Dashboard" element={<MissionGrid />} />
        <Route exact path="/piechart" element={<PieChart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
