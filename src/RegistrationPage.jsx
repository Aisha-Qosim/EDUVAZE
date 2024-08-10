import React, { useState } from 'react'

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    console.log("submit")
   
            e.preventDefault();
            if (!name || !email || !password || !confirmPassword) {
              setError('Please fill in all fields');
              return;
            }
            else if (password !== confirmPassword) {
              setError('The password doesn"t match');
              return;
            }else{
              console.log("Succesfully")
              alert('Register successfully');
            }
  }
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <h1 className='text-xl my-5 font-bold'>Register here to get started</h1>
        <div className='w-80 my-5'>
          <input type="text" placeholder='Full name' className='w-full border rounded-lg p-2' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='w-80'>
          <input type="email" placeholder='email' className='w-full border rounded-lg p-2' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='w-80 my-5'>
          <input type="password" placeholder='password' className='w-full border rounded-lg p-2' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='w-80 my-5'>
          <input type="password" placeholder='Confirm password' className='w-full border rounded-lg p-2' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        
        <div className='w-80'>
          <button className='border rounded-lg border-red-300'>Register</button>
        </div>
        <div className='my-5 flex justify-center'>
          <a href="/login" className='text-black text-lg'>Have an account? <span className='text-xl font-semibold'>Sign In!</span></a>
        </div>
      </form>
    </div>
   
  )
}

export default RegistrationPage