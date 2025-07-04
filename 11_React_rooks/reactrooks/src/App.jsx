import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { HookUseContext } from "./components/HookUseContext";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <HookUseContext>
        <h1>React Hooks</h1>

        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </>
  );
}

export default App;
