import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
      <Header />
      <div className='min-h-[calc(100vh-130px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;