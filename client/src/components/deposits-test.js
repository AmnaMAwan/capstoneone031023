import React, { useState , useEffect} from 'react';
import { Card, useUserContext } from '../pages/context'
import TotalDeposits from './sum-deposits';

export default function AddDeposit() {
  const [name, setName] = useState('');
  //const [name, setName] = useUserContext();
  const [deposit, setDeposit] = useState('');
  const { user } = useUserContext();
  const [deposits, setDeposits] = useState([]);
  const [totalDeposit, setTotalDeposit] = useState(0);
  const [balance, setBalance] = useState(0);
  const [show, setShow]         = React.useState(true);


  const apiUrl = 'http://localhost:5050/api/add-deposit';

  const handleNameChange = (e) => {
    //setName(e.target.value);
    setName('nmmmm');
  };

  const handleDepositChange = (e) => {
    setDeposit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const depositData = {
      //name: name,
      name:user.name,
      deposit: parseFloat(deposit), // Convert to a number
    
    };


    //balance 

 
 

  
function DepositsDetails()
{
  


  //useEffect(() => {
    // Fetch individual deposits when the component mounts
    if (user.name) {
      fetch(`http://localhost:5050/api/deposits/${user.name}`)
        .then((response) => response.json())
        .then((data) => {
          setDeposits(data);
        })
        .catch((error) => {
          console.error('Error fetching deposits:', error);
        });
      }
    //}, [user.name]);

 }




    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(depositData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('New deposit record added:', data);
        // Optionally, you can reset the form fields here
        setName('');
        setDeposit('');
      })
      .catch((error) => {
        console.error('Error adding deposit record:', error);
      });
  };
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
  
  // total deposits

  useEffect(() => {
    // Fetch and display the total deposit amount when the deposits change
    if (deposits.length > 0) {
      fetch(`http://localhost:5050/api/total-deposits/${user.name}`)
        .then((response) => response.json())
        .then((data) => {
          setTotalDeposit(data.sum);
        })
        .catch((error) => {
          console.error('Error fetching total deposit:', error);
        });
    } else {
      // If there are no deposits, set the total deposit to 0
      setTotalDeposit(0);
    }
  }, [TotalDeposits, user.name]);

  





  //

  

  return (

    <>

      <h3 align="center">Add Deposits[ {user.name}]</h3>
      
    <>

      <form onSubmit={handleSubmit}>
      <table  align="center">
        <tr>
         <td> <label>Name:</label></td>
          <td><input type="text" value={user.name} onChange={handleNameChange } />
        </td></tr>
        <tr><td><label>Amount:</label></td>
        <td><input type="number" value={deposit} onChange={handleDepositChange} /></td></tr>          
          
        <tr><td><button type="submit">Submit</button></td></tr>
        
        </table>
      </form>


</>
 
<>
      <ul>
        {deposits.map((name) => (
          <li key={deposit.name}>
            Name: {deposit.name}, Deposit: {deposit.deposit}
          </li>
        ))}
      </ul>
     
      
      <p align="right"><font size="5" color="darkblue"> Balance:{balance}</font></p>
    </>
  
    </>
  );
}
