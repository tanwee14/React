import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import {RouterProvider, createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Contact from './components/Contact.jsx';

const router=createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='/home'  element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}  />
  </Route>
)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
