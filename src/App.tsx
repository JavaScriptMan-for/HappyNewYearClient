import React from 'react';
import MainPage from "../pages/MainPage"
import SendToSanta from "../pages/SendToSanta"
import { Route, Routes } from 'react-router-dom';
import "./App.css";

const App: React.FC = () => {
  return (
    <>
    


    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/send-to-SantaClaus' element={<SendToSanta />}/>
    </Routes>
    </>
  )
};
export default App;
