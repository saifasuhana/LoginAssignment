import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/auth/register', {email, password})
      alert('Registration successful!')
      navigate('/login')
    } catch (err) {
      alert(err.response.data.message)
    }
  }
  return (
    <div>
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register
