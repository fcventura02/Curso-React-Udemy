import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import Home from "./pages/Home";
import About from "./pages/About";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { AuthProvider } from "./Context/AuthContext";
import { useAuthentication } from "./hooks/useAuthentication";

import "./App.css";
import CreatePost from "./pages/CreatePost";
import Dashboard from "./pages/Dashboard";
import Erro404 from "./pages/Erro404";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  const redirectPageIfUserNotLogged = (page)=> !user ? page : <Navigate to="/" />
  const userIsLogged = (page)=> user ? page : <Navigate to="/login" />

  return (
    <AuthProvider value={{ user }}>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          {loadingUser ? (
            <p>Carregando...</p>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={redirectPageIfUserNotLogged(<Login />)} />
              <Route path="register" element={redirectPageIfUserNotLogged(<Register />)} />
              <Route path="/posts/create" element={userIsLogged(<CreatePost />)} />
              <Route path="dashboard" element={userIsLogged(<Dashboard />)} />
              <Route path="*" element={<Erro404 />} />
            </Routes>
          )}
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
