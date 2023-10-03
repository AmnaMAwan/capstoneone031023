import React, { useEffect, useState } from 'react';
import { useUserContext } from '../pages/context' 
import { Table } from 'react-bootstrap';
//import { useUserContext , UserProvider} from '../pages/context'; // Import your context


export default function WithdrawtDetails() {
  const [name, setName] = useState('');
  const [withdraws, setWithdraws] = useState([]);
  const [totalWithdraws, setTotalWithdraw] = useState(0);
  //const [ user]  = useUserContext();
  const { user } = useUserContext();
  const [balance, setBalance] = useState(0);

  //const { user } = useUserContext();
  useEffect(() => {
    // Fetch and display the total deposit amount when the deposits change
    if (withdraws.length > 0) {
      fetch(`http://localhost:5050/api/total-withdraws/${user.name}`)
        .then((response) => response.json())
        .then((data) => {
          setTotalWithdraw(data.sum);
        })
        .catch((error) => {
          console.error('Error fetching total withdraws:', error);
        });
    } else {
      // If there are no deposits, set the total deposit to 0
      setTotalWithdraw(0);
    }
  }, [withdraws, user.name]);

         
    
  
//const DepositsDetails
  useEffect(() => {
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
  }, [withdraws, user.name]);


  useEffect(() => {
    // Fetch individual withdraws when the component mounts
    if (user.name ) {
      //if (deposits.value>0)
      fetch(`http://localhost:5050/api/withdraws/${user.name}`)
        .then((response) => response.json())
        .then((data) => {
          setWithdraws(data);
       })
        .catch((error) => {
          console.error('Error fetching withdraws:', error);
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
      <font siz="30" color="green">Withdraw history by :{user.name}</font>  
      
      <h2> Withdraw Details:</h2>
      <ul>
        {withdraws.map((withdraws) => (
          <li key={withdraws._id}>
            Name: {withdraws.name}, Withdraw: {withdraws.withdraw}, Time:{withdraws.createdAt}
          </li>
        ))}
      </ul>



      <font size="5" color="green">Total Withdrawls: <p>{totalWithdraws}</p></font>
     <font  size="5" color="darkblue" ><p> Balance : {balance}</p></font>
      
    </div>
  );
}
