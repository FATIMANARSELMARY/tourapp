import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import React from 'react';
import Activities from './components/Activities.js';
import Home from './components/Home.js';
import Kerala from './components/Kerala.js';
import Shimla from './components/Shimla.js';
import SignUp from './components/SignUp.js';
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Route path="/" element={<SignUp />} />
      </BrowserRouter> */}
      {/* <SignUp />
      <Home /> */}
      <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/kerala" element={<Kerala />} />
        <Route path="/Shimla" element={<Shimla />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
