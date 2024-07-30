import About from "../pages/About"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Posts from "../pages/Posts"

export const publicRoutes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
];

export const privateRoutes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/posts', component: Posts},
];