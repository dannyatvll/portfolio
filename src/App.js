import "./styles/App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutMe from "./pages/AboutMe.jsx"
import LandingPage from "./pages/LandingPage.jsx";

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
