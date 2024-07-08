import React, { useState } from 'react';
import './App.css';
import Heading from './components/User/Heading';
import Foodter from './components/User/Foodter';
import { Outlet } from 'react-router-dom';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Heading setSearchQuery={setSearchQuery} />
      <main>
        <Outlet />
      </main>
      <Foodter />
    </>
  );
}

export default App;
