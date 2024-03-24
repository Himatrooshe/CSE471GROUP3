import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import  Home from "./Components/Home"

import Landing from './Components/Landing';
import Signup from './Components/Signup';
import Login from './Components/loggin';
import Stream from './Components/stream';
import Movies from './Components/Movies'
import userProfile from "./Components/userProfile";



function App() {
  return (
<>
<Router>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Landing/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="/stream" element = {<Stream/>}/>
    <Route path="/movies" element = {<Movies/>}/> 
    <Route path="/user" element = {<userProfile/>}/> 
  </Routes>
</Router>
</>
  );
}

export default App;
