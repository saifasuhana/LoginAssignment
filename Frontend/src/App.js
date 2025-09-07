import React, {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import axios from 'axios'

axios.defaults.withCredentials = true

function App() {
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:5000/auth/session').then(res => {
      setAuth(res.data.loggedIn)
    })
  }, [])
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route
          path='/login'
          element={
            auth ? <Navigate to='/dashboard' /> : <Login setAuth={setAuth} />
          }
        />
        <Route
          path='/dashboard'
          element={
            auth ? <Dashboard setAuth={setAuth} /> : <Navigate to='/login' />
          }
        />
        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    </Router>
  )
}

export default App
