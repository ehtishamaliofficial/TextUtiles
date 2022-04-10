
import { useState } from 'react/cjs/react.development';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import * as ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";

import "./App.css";
import Table from './components/Table';
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


function App() {
  const[mode , setMode]=useState("light");
  const[alert , setAlert]=useState(null);
  const showAlert = (massage , type) =>{
    setAlert({
      msg:massage,
      type:type

    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
   const enableDarkMode = ()=>{
     if(mode === "light"){
       setMode("dark");
       document.body.style.backgroundColor="#342e2e";
       showAlert("Dark Mode Enable","success");
       
      }
     else{
       setMode("light");
       document.body.style.backgroundColor="white";
       showAlert("Light Mode Enable","success");
     }
   }
  return (
    <>
      
      <Navbar title="TextUtils"  mode={mode} enableDarkMode={enableDarkMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />
        <Route path='/table' element={<Table mode={mode} enableDarkMode={enableDarkMode}/>} />
      </Routes>
    </>
  );
}

export default App;
