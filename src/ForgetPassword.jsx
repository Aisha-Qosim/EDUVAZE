import { React, useState } from 'react'

const ForgetPassword = () => {
  const [resetpassword, setResetPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    console.log("submit")
    e.preventDefault();
    if (!resetpassword || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    else if (resetpassword !== confirmPassword) {
      setError('The password does not match');
      return;
    } else {
      console.log("Succesfully")
      alert('Login successful');
    }
  }
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <h1 className='text-xl my-5 font-bold'>Create a new password here</h1>
        
        <div className='w-80 my-5'>
          <input type="password" placeholder='password' className='w-full border rounded-lg p-2' value={resetpassword} onChange={(e) => setResetPassword(e.target.value)} />
        </div>
        <div className='w-80 my-5'>
          <input type="password" placeholder='Confirm password' className='w-full border rounded-lg p-2' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        
        <div className='w-80'>
          <button className='border rounded-lg border-red-300'>Save New Password</button>
        </div>
        
      </form>
    </div>
  )
}

export default ForgetPassword