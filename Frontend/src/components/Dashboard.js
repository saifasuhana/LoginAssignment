import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Dashboard({setAuth}) {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await axios.post('http://localhost:5000/auth/logout')
    setAuth(false)
    navigate('/login')
  }
  return (
    <div>
      <h2>Welcome to Dashboard 🎉</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard
