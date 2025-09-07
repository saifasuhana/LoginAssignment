import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Login({setAuth}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:5000/auth/login', {email, password})
      setAuth(true)
      navigate('/dashboard')
    } catch (err) {
      alert(err.response.data.message)
    }
  }
  return (
    <div>
      <h2>Login</h2>
      <input
        type='email'
        placeholder='Email'
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
