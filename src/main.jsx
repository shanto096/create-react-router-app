import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Frist from './Component/Frist/Frist';
import Friends from './Component/Friends/Friends';
import FriendDtl from './Component/FriendDtl/FriendDtl';
import SingleContact from './Component/SingleContact/SingleContact';
import Blog from './Component/Blog/Blog';
import SingleBlog from './Component/singleBlog/SingleBlog';

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <App></App>
//   },
//   {
//     path:'/about',
//     element:  <div>ami about</div>
//   },
//   {
//     path:'/blog',
//     element: <div>ami blog</div>
//   }
// ])
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Frist></Frist>,
        loader: ()=>fetch('https://restcountries.com/v3.1/all')
      },
     
      {
        path:'/friends',
        element:<Friends></Friends>,
        loader:() => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'/friends/:friendId',
        element:<FriendDtl></FriendDtl>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/comments')
      },
      {
        path:'/contact/:contactId',
        element:<SingleContact></SingleContact>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.contactId}`)

      },
      {
        path:'/blog',
        element:<Blog></Blog>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/albums')
      },
      {
        path:'/blog/:blogId',
        element:<SingleBlog></SingleBlog>,
        loader: (params) => fetch(`https://jsonplaceholder.typicode.com/albums/${params.blogId}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router}></RouterProvider>
    
  </React.StrictMode>,
)
