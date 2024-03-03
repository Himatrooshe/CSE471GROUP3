import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import  Home from "./Components/Home"

import Landing from './Components/Landing';
function App() {
  return (
<>
<Router>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Landing/>}/>
  </Routes>
</Router>
</>
  );
}

export default App;
