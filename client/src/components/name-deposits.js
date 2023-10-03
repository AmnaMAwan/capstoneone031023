import React, { useEffect, useState } from 'react';
import { useUserContext } from '../pages/context' 
import { Table } from 'react-bootstrap';
//import { useUserContext , UserProvider} from '../pages/context'; // Import your context


export default function DepositDetails() {
  const [name, setName] = useState('');
  const [deposits, setDeposits] = useState([]);
  const [totalDeposit, setTotalDeposit] = useState(0);
  //const [ user]  = useUserContext();
  const { user } = useUserContext();
  const [balance, setBalance] = useState(0);

  //const { user } = useUserContext();

         
    
  
//const DepositsDetails
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
  }, [deposits, user.name]);


  useEffect(() => {
    // Fetch individual deposits when the component mounts
    if (user.name ) {
      //if (deposits.value>0)
      fetch(`http://localhost:5050/api/deposits/${user.name}`)
        .then((response) => response.json())
        .then((data) => {
          setDeposits(data);
       })
        .catch((error) => {
          console.error('Error fetching deposits:', error);
        });
    } 
  }, [user.name]
  )
  //balance 

 
 

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
      <font siz="30" color="green">Deposit history by :{user.name}</font>  
      
      <h2> Deposits Details:</h2>
      <ul>
        {deposits.map((deposit) => (
          <li key={deposit._id}>
            Name: {deposit.name}, Deposit: {deposit.deposit}, Time:{deposit.createdAt}
          </li>
        ))}
      </ul>
<h3> tabular</h3>
<table striped bordered hover variant="dark">
{deposits.map((deposit) => (

  <>
  <thed ></thed>
  
  <th> Name</th><th> Amt</th><th> Dated</th>
          <tr>
            
            <td>{deposit.name}</td>
            <td>{deposit.deposit}</td>
            <td>{deposit.createdAt}</td>
              
          </tr></>
        ))}
        </table>



      <font siz="20" color="green">Total Deposits : <p> {totalDeposit}</p></font>
      
      <p> Balance={balance}</p>
      
    </div>
    
  );
}
