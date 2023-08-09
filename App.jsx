import { useState } from 'react'
import Authenticate from './Authenticate';
import SignUpForm from './SignUpForm';
import './App.css'

export default function App() {

  const [token, setToken] = useState(null);
  

  return (
    <>
    <Authenticate token = {token} setToken = {setToken}/>
    <SignUpForm token = {token} setToken = {setToken}/>
    </>
  )
}
