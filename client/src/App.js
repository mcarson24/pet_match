// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profile from './components/profile';
import Mission from './components/mission';
import Pet from './components/pet';
import Nav from './components/nav';
import Donate from './components/donate';
import Login from './components/login';
import SignUp from './components/signup';


function App() {
  return (
    <>

<Router>
     <React.StrictMode>
       <Nav />
      
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/donate" element={<Donate />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/ourmission" element={<Mission />} />
        <Route path="/pets" element={<Pet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
     </React.StrictMode>
   </Router>

  
    


    </>

    
  );
}

export default App;
