import { useUserContext , UserProvider,useDepositContext,Card} from '../pages/context';
import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export  default function AllActions(){
    const {user} = useUserContext(); 
    const {deposit}=useUserContext(); 
     const [balance, setBalance] = useState(0);
    
   //const  deposit=100;
   //const [value, setValue] = useState('');
   // ctxbal.balance=ctxbal.balance+300;
   
    
    //bal=deposit;
   
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    var [Deposits, setDeposits]    = React.useState('');
     
    
    useEffect(() => {
        // Fetch the balance for the specified name from your server or API
        fetch(`http://localhost:5050/api/balance/${user.name}`) // Use the correct API endpoint URL
          .then((response) => response.json())
          .then((data) => {
            console.log('Received data:', data);
            setBalance(data.balance);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }, [user.name]);
      
    
      
    
    
     
  
        
        return (
  
                   
  
  
          //
          <>
          <p align="center">
          <Card
          bgcolor="primary"
          
          header="All actions Screen"
          status={status}
          body={show ? (  
                  <>
                  {user.name}
                  <br></br>
                  {'current balance is '}<font color='darkblue'>{balance}</font>
                  <font  color="red">:</font>
                   
                  
                  
                  
                  
                  </>
                ):(
                  <>
                  <h5>Success</h5>
                  
                  </>
                )}
        />
  
                 <hr/
                 > 
          
          
          
          </p>
          </>
                 
                 
                
              );  
        }        
  
  
      
  