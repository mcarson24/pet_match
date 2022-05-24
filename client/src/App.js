// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profile from './components/profile';
import Mission from './components/mission';
import Pet from './components/pet';

function App() {
  return (
    <>

<Router>
     <React.StrictMode>
       <Routes>
         
         <Route path="/profile" element={<Profile />} />
         <Route path="/ourmission" element={<Mission />} />
        <Route path="/pets" element={<Pet />} />
      </Routes>
     </React.StrictMode>
   </Router>

    <h1>hello world</h1>
    <Home/>


    </>

    
  );
}

export default App;
