import React from 'react'
import { useAppSelector } from '../hooks/redux'
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/routes';
import Error from '../pages/Error';
import Login from '../pages/Login';

const AppRouter = () => {
    const {isAuth} = useAppSelector(state => state.authReducer);


  return (
    <div>
        {isAuth 
        ? 
        <Routes>
            {privateRoutes.map(route => 
                <Route key={route.path} path={route.path} element={<route.component/>}/>
            )}
            <Route path='*' element={<Error/>}/>

        </Routes>
        : 
        <Routes>
            {publicRoutes.map(route => 
                <Route key={route.path} path={route.path} element={<route.component/>}/>
            )}
            <Route path='*' element={<Login/>}/>
        </Routes>
        }
      
    </div>
  )
}

export default AppRouter
