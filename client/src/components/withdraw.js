import React from 'react';
import { useUserContext } from '../pages/context' 

function Withdraw() {
    const { user } = useUserContext();

    return (
      <div>
        
        <h1>Withdraw</h1>
        <p>Welcome, {user.name}!</p>
      </div>
  );
}

export default Deposit;