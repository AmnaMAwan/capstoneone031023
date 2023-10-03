import React from 'react';
//import ReactDOM from 'react-dom/client';
import {ReactDOM, createRoot} from 'react-dom/client'
import DepositDetails from './components/name-deposits';
import './index.css';
import {HashRouter,Route,Routes} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import usersContext from './pages/context'
import { UserProvider } from './pages/context';
import LoginPage from './components/LoginPage';
import {createRoott} from 'react-dom';
import Dashboard from './components/Dashboard';
import NavigationBar from './components/navbar';
import Deposit from './components/deposit';
import ExampleComponent from './components/example-1'
import Signup from './components/createusers';
import DepositList from './components/name-history'
import WithdrawDetails from './components/name-withdraws';
import AddWithdraw from './components/withdraw-test';
import { SignInMethod } from 'firebase/auth';
import TotalDeposits from './components/sum-deposits';
import AddDeposit from './components/deposits-test'
import AllActions from './components/allactions'
import Balance from './components/name-balance'
//import WithdrawDetails from './components/name-withdraws';

//import DepositDetails from './components/name-deposits';


function Spa(){
    return (
      <HashRouter>
        <hr/>
       
    
        <hr/>
        <UserProvider>
       
       <div className="container" style={{padding: "20px"}}>
           
           <Routes> 
            <Route path="/" exact element={<LoginPage/>} />
            <Route path="Dashboard"  element={<Dashboard/>} />
            <Route path="createusers"  element={<Signup/>} />
            <Route path="example-1"  element={<ExampleComponent/>} />
            <Route path="deposit"  element={<Deposit/>} />
            <Route path="name-deposits"  element={<DepositDetails/>} />
            <Route path="name-history"  element={<DepositList/>} />
            <Route path="sum-deposits"  element={<TotalDeposits/>} />
            <Route path="deposit-test"  element={<AddDeposit/>} />
            <Route path="withdraw-test"  element={<AddWithdraw/>} />
            <Route path="allactions"  element={<AllActions/>} />
            <Route path="name-withdraws"  element={<WithdrawDetails/>} />
            <Route path="name-balance"  element={<Balance/>} />
            
            
                           
            
                           </Routes>   
  
  </div>
  
  </UserProvider>  
      </HashRouter>
        
            
            
            
    );
  }
  
  
  
  
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
    
  <h1 align="center">Banking App</h1>
  <Spa/>
    </React.StrictMode>,
  );
  