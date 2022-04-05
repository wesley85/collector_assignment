import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

function Login() {
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const register = () => {
        axios.put(`http://localhost:5000/register`, {
          UserName: usernameReg,
          Password: passwordReg
      }).then((response) => {
          console.log(response);
      })
    };

    return(
        <div className='login'>
            <div>
                <h1>Register</h1>
                <label>Username</label>
                <input 
                    type='text' 
                    onChange={(e) => {
                        setUsernameReg(e.target.value)
                    }}    
                />
                <label>Password</label>
                <input 
                    type='text' 
                    onChange={(e) => {
                        setPasswordReg(e.target.value)
                    }} 
                />
                <button onClick={register()}>Register</button>
            </div>
            <div>
                <h1>Login</h1>
                <label>Username</label>
                <input type='text' />
                <label>Password</label>
                <input type='text' />
                <button>Login</button>
            </div>
        </div>
    )
}

export default Login;