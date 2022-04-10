import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Route>
            <Route path="/" element={<Navigate to={"/home"} replace/>}/>
          </Routes>
        </Router>

      </header>
    </div>
  );
}

export default App;
