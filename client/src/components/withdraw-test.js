import React, { useState, useEffect } from 'react';
import { useUserContext } from '../pages/context'

export default function AddWithdraw() {
  const [name, setName] = useState('');
  //const [name, setName] = useUserContext();
  const [withdraw, setWithdraw] = useState('');
  const { user } = useUserContext();
  const [withdraws, setWithdraws] = useState([]);
  const [totalWithdraw, setTotalWithdraw] = useState(0);
  const [balance, setBalance] = useState(0);

  const apiUrl = 'http://localhost:5050/api/add-withdraw';

  const handleNameChange = (e) => {
    //setName(e.target.value);
    setName('nmmmm');
  };

  const handleWithdrawChange = (e) => {
    setWithdraw(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const depositData = {
      //name: name,
      name:user.name,
      withdraw: parseFloat(withdraw), // Convert to a number
    };


function WithdrawDetails()
{
  //useEffect(() => {
    // Fetch and display the total deposit amount when the deposits change
    if (withdraws.length > 0) {
      fetch(`http://localhost:5050/api/total-withdraws/${user.name}`)
        .then((response) => response.json())
        .then((data) => {
          setTotalWithdraw(data.sum);
        })
        .catch((error) => {
          console.error('Error fetching total deposit:', error);
        });
    } else {
      // If there are no deposits, set the total deposit to 0
      setTotalWithdraw(0);
    }
  


  //useEffect(() => {
    // Fetch individual deposits when the component mounts
    if (name) {
      fetch(`http://localhost:5050/api/withdraws/${user.name}`)
        .then((response) => response.json())
        .then((data) => {
          setWithdraws(data);
        })
        .catch((error) => {
          console.error('Error fetching deposits:', error);
        });
    }
 // }, [name]);

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
        setWithdraw('');
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
  

  





  //

  return (
    <div>
      <h1>Add Withdraw {user.name}</h1>
      <form onSubmit={handleSubmit}>
        <table align="center">
          <tr>
            <td><label>Name:</label></td>
          <td><input type="text" value={user.name} onChange={handleNameChange } /></td>
        
        </tr>
        <tr><td><label>Deposit Amount:</label></td>
          <td><input type="number" value={withdraw} onChange={handleWithdrawChange} /></td></tr></table>
          
        
          
        
        <button type="submit">Submit</button>
      </form>



     
      <ul>
        {withdraws.map((withdraw) => (
          <li key={withdraw._id}>
            Name: {user.name}, Withdraw: {withdraw.withdraw}
          </li>
        ))}
      </ul>
      
      <p align="right"><font size="5" color="darkblue"> Balance:{balance}</font></p>
      
    </div>
  );
}
