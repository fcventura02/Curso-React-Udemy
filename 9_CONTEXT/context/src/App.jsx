import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
