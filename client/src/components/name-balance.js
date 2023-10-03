import React, { useEffect, useState } from 'react';
import { UserProvider,useUserContext } from '../pages/context';

export default function Balance({ name }) {
  const [balance, setBalance] = useState(0);
  const { user } = useUserContext();

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

  



  //

  return (
    <div>
      <h1>Balance for {user.name}</h1>
      <p>Balance: ${balance}</p>
    </div>
  );
}
