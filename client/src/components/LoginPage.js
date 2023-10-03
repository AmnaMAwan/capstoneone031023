import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { useUserContext, Card } from '../pages/context'; // Import your context
import Dashboard from './Dashboard'
//import Signup from './createusers'
import Signup from './createusers'
import ExampleComponent from './example-1'


function LoginPage() {
  const [show, setShow]         = React.useState(true);
  const { updateUser } = useUserContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus]     = React.useState('');
  
  
  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
  
      setShow(false);
        const user = userCredential.user;
        const userData = { name: email };
        


        updateUser(userData); // Set the user data in the context
        navigate('/Dashboard');
      })

//handle create

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
//

return (
  <>
 <p align="center">

  <Card
  bgcolor="primary"
  header="Login Please"
 
 
  body={show ? ( 
    <>
    
    <div>
    <label htmlFor="email-address">Email address</label></div>
    <div>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
</div>
<div>
<label htmlFor="password">Password</label></div>
         <div> <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          /></div>
<div>
<button onClick={handleLogin}>Login</button> </div>
</>
  ):(
    <>
<h5> 
                  <font color="green">Success</font>
                <br/> user  <font color="yellow">
                  {email} </font>
                  
                  is create successfully </h5>


  )
</>
)}
  />
<p className="text-sm text-white text-center">
        No account yet?{' '}
        
        <NavLink to="/createusers">Sign Up</NavLink>

        
      </p>

</p> 
</>

)}

export default LoginPage;
