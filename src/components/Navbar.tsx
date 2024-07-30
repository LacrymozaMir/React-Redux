import React from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button } from '../styles/components'
import { authLogout } from '../store/reducers/AuthActionCreators'

const Nav = styled.nav`
    height: 50px;
    width: 100vw;
    display: flex;
    align-items: center;
    padding: 0 15px;
    background-color: black;
`

const NavBarLinks = styled.div`
    margin-left: auto;
`

const NavLink = styled.span`
    text-decoration: none;
    color: white;
    padding: 8px;
    transition: 0.3s ease-out;

    &:hover {
        color: gray;
    }
`

const Navbar = () => {
    const {isAuth} = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch();
    const location = useLocation();

    const logout = () => {
        dispatch(authLogout());
    }

  return (
    <Nav>
        <NavBarLinks>
            <Link to="/" style={{textDecoration: 'none'}}><NavLink>Home</NavLink></Link>
            <Link to="/about" style={{textDecoration: 'none'}}><NavLink>About</NavLink></Link>
            <Link to="/posts" style={{textDecoration: 'none'}}><NavLink>Posts</NavLink></Link>
            {isAuth
            ? <Button onClick={logout}><NavLink>Logout</NavLink></Button>
            : <Link to="/login" style={{textDecoration: 'none'}}><NavLink>Login</NavLink></Link>
            }

        </NavBarLinks>
    </Nav>
  )
}

export default Navbar
