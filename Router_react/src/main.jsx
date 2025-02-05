import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import Layout from './Layout.jsx';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// Define your router with routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

// Render your app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




// // const router=createBrowserRouter([{
// //   path:'/',
// //   element:<Layout/>,
// //   children :
// //    [
// //     {
// //       path:"",
// //       element:<Home/>,
// //     }

// //   ]
// // }])

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//     <Route path='' element={<Home/>}/> 
//     </Route>

//   )
// )


