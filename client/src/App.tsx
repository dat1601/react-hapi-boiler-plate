import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import Nomatch from "./pages/Nomatch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Router>
          <Routes>
            <Route path={"/ui/"} element={ <Layout /> } >
              <Route path="home" element={ <Home /> } />
              <Route path="about" element={ <About /> } />
              <Route path="" element={ <Navigate to={"/ui/home"} replace /> } />
            </Route>
            <Route path="*" element={ <Nomatch /> } />
          </Routes>
        </Router>

      </header>
    </div>
  );
}

export default App;
