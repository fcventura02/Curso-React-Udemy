import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
