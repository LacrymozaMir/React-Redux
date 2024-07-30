import React from 'react';
import { AppContainer } from './styles/components';
import GlobalStyles from './styles/global';
import Posts from './pages/Posts';


const App = () => {
  return (
    <>
      <AppContainer>
        <Posts/>
      </AppContainer>
      <GlobalStyles/>
    </>
  )
}

export default App
