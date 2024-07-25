// App.js
import React from 'react';
import Heading from './components/User/Heading';
import Foodter from './components/User/Foodter';
// import router from './components/User/Main/index';
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>

      <Heading />
     <main>
     <Outlet />
     </main>
      <Foodter />

    </>
  )
}

export default App;
