import React from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import AppMain from '../AppMain/AppMain';

const App = () => {
  return (
    <div className='px-[30px] py-[34px]'>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>
  );
}

export default App;
