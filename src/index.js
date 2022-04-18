import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './components/Login/Login';
import { Signup } from './components/Signup/Signup';
import Home from './pages/Home/Home';
import { AuthContextProvider } from "./context/context";
import { Landing } from './pages/Landing/Landing';
import { Cart } from './pages/Cart/Cart';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <AuthContextProvider>
      <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/landing' element={<Landing/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </AuthContextProvider>  
  </BrowserRouter>
</React.StrictMode>,
  document.getElementById('root')
);