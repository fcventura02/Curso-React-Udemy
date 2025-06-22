import NavBar from "../components/NavBar";
import { SearchForm } from "../components/SearchForm";
import About from "../pages/About";
import Home from "../pages/Home";
import Info from "../pages/Info";
import NotFound from "../pages/NotFound";
import Product from "../pages/Produtc";
import Search from "../pages/Search";
import "./App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* 9 - search */}
      <SearchForm />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* 6 - nested route */}
        <Route path="/products/:id/info" element={<Info />} />
        {/* 4 - rota dinamica */}
        <Route path="/products/:id" element={<Product />} />

        {/* 9 search params */}
        <Route path="/search" element={<Search />} />
        {/* 10 - redirect */}
        <Route path="/company" element={<Navigate to="/about" />} />
        {/* 7  - no match route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
