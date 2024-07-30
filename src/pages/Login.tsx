import React from 'react'
import { useAppDispatch } from '../hooks/redux'
import { authLogin } from '../store/reducers/AuthActionCreators';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const login = () => {
    dispatch(authLogin());
    navigate('/posts');
  }

  return (
    <div>
      <button onClick={login}>Войти</button>
    </div>
  )
}

export default Login
