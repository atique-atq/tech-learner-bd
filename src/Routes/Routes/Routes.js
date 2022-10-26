import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main"
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Nopagefound from "../../Pages/Shared/Nopagefound/Nopagefound.js";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/courses',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Courses></Courses>
            },
            {
                path: '*',
                element: <Nopagefound></Nopagefound>
            }
        ]
    }
])