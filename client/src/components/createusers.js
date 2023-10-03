import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from './firebase';
import { useUserContext , UserProvider, Card} from '../pages/context';
import LoginPage from './LoginPage'


export  default function  Signup  ()  {
  //var user=React.useContext(UserContext)  
  const navigate = useNavigate();
  
    const [show, setShow]        = React.useState(true);
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [status, setStatus]     = React.useState('');
    const [user, setUser]     = React.useState('');
    
/*    export function CreateAccount(){
      const [show, setShow]         = React.useState(true);
      const [status, setStatus]     = React.useState('');
      
      const [email, setEmail]       = React.useState('');
      const [password, setPassword] = React.useState('');
      
*/





 // validate  
 function validate(field, label){
  if (!field) {
    setStatus('Error: ' + label);
    setTimeout(() => setStatus(''),3000);
    return false;
  }
  return true;
}




 //
 // handle

 function handleCreate(){
  console.log(email,password);
  
  if (!validate(email,    'email'))    return;
  if (!validate(password, 'password')) return;
  
  setShow(false);
}  


 //
 // clear
 function clearForm(){
  
  setEmail('');
  setPassword('');
  setShow(true);
  
}
 //


 
 
 const onSubmit = async (e) => {
      e.preventDefault()
     
      handleCreate();
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);

            navigate("/LoginPage")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 

    return (
      <>
    <p align="center">
      <Card
        bgcolor="primary"
        header="Sign Up here "
        status={status}
       
        body={show ? (  
                <>
               
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={onSubmit}>Create Account</button>
                </>
              ):(
                <>
                <h5> 
                  <font color="green">Success</font>
                <br/> user  <font color="yellow">
                  {email} </font>
                  
                  is create successfully </h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                <NavLink to="/LoginPage">exa up</NavLink>
                </>
              )}
      />
      </p>
      </>
    )
              }
  