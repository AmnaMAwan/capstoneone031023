import React from 'react';
import {ReactDOM, createRoot} from 'react-dom/client';
import './index.css';
import {createRoott} from 'react-dom';
import {HashRouter,Route,Routes} from 'react-router-dom';
import banks from './logoown.jpeg';

import { UserContext } from './context';
import { NavBars } from './navbars';
import { NavBarsMain } from './navbarsmain';
import {Signup} from './createusers';

import { Deposit } from './deposit';
import { Withdraw } from './withdraw';
import {Deposits} from './testdeposit';
import {Allactions} from './allactions';
import {Login} from './login';


//import {Signup} from './createusers';


//export const UserContext = React.createContext(undefined);

function Spa(){
  return (
    <HashRouter>
      <hr/>
      <img src={banks} height={100} width={100}></img>
   <NavBarsMain/>
      <hr/>
     <UserContext.Provider value={{users:[{balance:100}]}}>
     <div className="container" style={{padding: "20px"}}>
         
         <Routes> 
          <Route path="/" exact element={<Login/>} />
                         
          
          <Route path="/allactions" element={<Allactions/>} />
          <Route path="/createusers" element={<Signup/>} />
               </Routes>   

</div>

</UserContext.Provider>  
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
