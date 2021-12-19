import "./Styles/App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutMe from "./Pages/AboutMe.jsx"
import LandingPage from "./Pages/LandingPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<LandingPage/>} />
        <Route exact={true} path="/aboutme" element={<AboutMe/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
