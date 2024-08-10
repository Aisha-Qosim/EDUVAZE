import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RegistrationPage from './RegistrationPage'
import './App.css'
import LoginPage from './LoginPage'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import ForgetPassword from './ForgetPassword'


function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<RegistrationPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/forget' element={<ForgetPassword/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
