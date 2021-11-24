import './App.css'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

import userActions from './redux/actions/userActions'

const App = () => {
   const user = useSelector(state => state.auth.user)
   const dispatch = useDispatch()

   useEffect(() => {
      if (localStorage.getItem('token')) {
         dispatch(userActions.loginUserLS(localStorage.getItem('token')))
      }
   }, [])

   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='signin' element={<Signin />} />
            <Route path='signup' element={<Signup />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App