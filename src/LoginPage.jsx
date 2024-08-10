import React, { useState } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('please fill in all fields');
    } else {
      setError(null);
      alert('Login successful');
    }
  }
  return (
  
    <div className='flex flex-col justify-center items-center w-full'>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <h1 className='text-xl my-5 font-bold'>Login here to get started</h1>
        <div className='w-80'>
          <input type="email" placeholder='email' className='w-full border rounded-lg p-2' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='w-80 my-5'>
          <input type="password" placeholder='password' className='w-full border rounded-lg p-2' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='my-5 flex justify-end'>
          <a href="/forget" className='text-red-300 text-lg'>Forget Password?</a>
        </div>
        <div className='w-80'>
          <button className='border rounded-lg border-red-300'>Login</button>
        </div>
        <div className='my-5 flex justify-center'>
          <a href="/" className='text-black text-lg'>Dont't have an account? <span className='text-xl font-semibold'>Sign up!</span></a>
        </div>
      </form>
    </div>
  )
}

export default LoginPage