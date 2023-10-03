// NavigationBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../pages/context-gpt'
import Dashboard from './Dashboard';
import AddDeposit from './deposits-test'
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import './style.css';


function NavigationBar() {
    //const { user } = useUserContext()
  return (
    <>
    <nav className="navbar">
            <ul className="navMenu">
                <li>
                    <a href="#" className="link">
                        Home
                    </a>
                </li>
                <li>
                 <a href="#deposit-test" className="link"  data-bs-toggle="tooltip"  title=' Enter amount to be deposited'   >
                        Deposit Here
                    </a>
                </li>
                <li>
                 <a href="#name-deposits" className="link"  data-bs-toggle="tooltip"  title=' Enter amount to be deposited'   >
                        Deposits History
                    </a>
                </li>


                <li>
                 <a href="#withdraw-test" className="link"  data-bs-toggle="tooltip"  title=' Enter amount to be deposited'   >
                        Withdrawls
                    </a>
                </li>
                
                <li>
                 <a href="#name-withdraws" className="link"  data-bs-toggle="tooltip"  title=' Enter amount to be deposited'   >
                        Withdrawl History
                    </a>
                </li>

               
                <li>
                    <a href="#name-balance" className="link "  data-bs-toggle="tooltip"  title=' This pages displays all actions done so far'>
                        Balance
                    </a>
                </li>

                
                <li>
                    <a href="#allactions" className="link "  data-bs-toggle="tooltip"  title=' This pages displays all actions done so far'>
                        All Actions
                    </a>
                </li>
            </ul>
        </nav>
</>

 )}    
    
    
    
    
    
    export default NavigationBar;
