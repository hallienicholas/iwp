import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Credits: For this page, I followed the tutorial at: 
// https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications


//import './loginPopUp.css';

async function loginUser(credentials) {
    return fetch('http://localhost:3001/loginpop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function LoginPopUp({ setToken }) {
  
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }
    
    const loginWrapper = `.login-wrapper {
      top:50px;
      left:400px;
      right:400px;
      }`

   
    return(
        <div className="login-wrapper position-fixed ">
          <style>
          {loginWrapper}
          </style>
          <div className="card mb-4 shadow">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Please Log In</h6>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                  <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                  </label>
                  <br />
                  <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
  )
}

LoginPopUp.propTypes = {
    setToken: PropTypes.func.isRequired
  }