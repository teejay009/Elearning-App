// App.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Features from './components/Navbar/Features/Features'; 
import Benefit from './components/Navbar/Benefits/Benefits'; 
import Courses from './components/Navbar/Courses/Courses'; 
// import Register from './components/Navbar/Register/Register';
import Register from './pages/Auth/Register';
import HeroSection from "./components/HeroSection/HeroSection"
import AboutUs from './components/Navbar/AboutUs/AboutUs';
import Dashboard from './components/Boards/Dashboard/Dashboard';
import Discover from './components/Boards/Discover/Discover';
import Rewards from './components/Boards/Rewards/Rewards';
import Login from './pages/Auth/Login';
import Contact from './components/Navbar/Contact/Contact';
import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from './components/context/AuthContext';
import Home from './components/Home/Home';
// import Celo from './components/Boards/fields/celo';
import Arbitrum from './components/HeroSection/fields/Arbitrum';
import Lisk from './components/HeroSection/fields/Lisk';
import CeloAfrica from './components/HeroSection/fields/CeloAfrica';
import Dlt from './components/HeroSection/fields/Dlt';
const App = () => {


  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/home" />;
    }

    return children
  };


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/'>
        <Route index element={<ProtectedRoute><HeroSection/></ProtectedRoute>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/userPage' element={<HeroSection/>}/>
        <Route path="/features" element={<ProtectedRoute><Features /></ProtectedRoute>} />
        <Route path="/benefit" element={<ProtectedRoute><Benefit /></ProtectedRoute>} />
        <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutUs" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
        <Route path="/board/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/board/discover" element={<ProtectedRoute><Discover /></ProtectedRoute>} />
        <Route path="/board/rewards" element={<ProtectedRoute><Rewards /></ProtectedRoute>} />
        <Route path='/arbitrum' element={<Arbitrum/>}/>
        <Route path='/lisk' element={<Lisk/>}/> 
        <Route path='/celo' element={<CeloAfrica/>}/>
        <Route path='/dlt' element={<Dlt/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;