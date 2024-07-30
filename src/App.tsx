import React from 'react';
import { AppContainer } from './styles/components';
import GlobalStyles from './styles/global';
import Posts from './pages/Posts';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
      <GlobalStyles/>
    </>
  )
}

export default App
