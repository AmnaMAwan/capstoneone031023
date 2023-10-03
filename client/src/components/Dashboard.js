import React , {useEffect, useState} from 'react';
//import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useUserContext , UserProvider} from '../pages/context'; // Import your context
import {HashRouter,Route,Routes} from 'react-router-dom';
import {ReactDOM, createRoot} from 'react-dom/client'

import { NavLink, useNavigate } from 'react-router-dom';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import NavigationBar from './navbar';
import Deposit from './deposit'




function Dashboard() {
  const { user } = useUserContext();
  const [balance, setBalance] = useState(0);
  const [deposits, setDeposits] = useState([]);
  const [totalDeposit, setTotalDeposit] = useState(0);
  const [withdraws, setWithdraws] = useState([]);
  const [totalWithdraws, setTotalWithdraw] = useState(0);


//}

useEffect(() => {
  // Fetch the balance for the specified name from your server or API
  fetch(`http://143.198.105.14:5050/api/balance/${user.name}`) // Use the correct API endpoint URL
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
    fetch(`http://143.198.105.14:5050/api/total-deposits/${user.name}`)
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
//

// withdrawls

//const DepositsDetails
useEffect(() => {
  // Fetch and display the total deposit amount when the deposits change
  if (withdraws.length > 0) {
    fetch(`http://143.198.105.14:5050/api/total-withdraws/${user.name}`)
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





//
  return (
    

    <div>
    <NavigationBar/>
    <h1>Dashboard</h1>
    <p>Welcome, {user.name}</p><p> Current Balance is :{balance}</p>
  </div>
);
} 
  
  
            
  
  
 
  
  
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
    
  <h1 align="center">Banking App</h1>
  
    </React.StrictMode>,
  );
  
    
    
    
    

export default Dashboard;
