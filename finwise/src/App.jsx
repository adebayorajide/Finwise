import { Routes, Route } from 'react-router-dom';
import './App.css'
import Signup from './components/Signup';
import Login from './components/Login';
import Welcome from "./components/welcome/Welcome";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Welcome />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
    </Routes>
    
    
  );

};

export default App;
