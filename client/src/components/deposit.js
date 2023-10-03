import React from 'react';
import { useUserContext } from '../pages/context' 

function Deposit() {
    const { user } = useUserContext();

    return (
      <div>
        
        <h1>Deposits</h1>
        <p>Welcome, {user.name}!</p>
      </div>
  );
}

export default Deposit;