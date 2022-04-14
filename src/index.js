import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from './components/Signup/Signup';
// import Home from './pages/Home/Home'

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='signup' component={<Signup/>}/>
        </Route>
      </Routes>
  </BrowserRouter>
</React.StrictMode>,
  document.getElementById('root')
);