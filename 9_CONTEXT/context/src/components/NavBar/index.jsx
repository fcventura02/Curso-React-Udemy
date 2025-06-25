import { NavLink } from "react-router-dom";

import './style.css'

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre nós</NavLink>
      <NavLink to="/products">Produtos</NavLink>
    </nav>
  );
};

export default NavBar;
