import React, { useEffect, useState } from 'react';

export default function TotalDeposits() {
  const [totalDeposits, setTotalDeposits] = useState(0);

  useEffect(() => {
    // Fetch the total deposits from your server or API
    fetch('http://localhost:5050/api/total-deposits') // Use the correct API endpoint URL
    //http://localhost:5050/api/add-deposit
      .then((response) => response.json())
      .then((data) => {
        setTotalDeposits(data.sum);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>Total Deposits</h1>
      <p>Total Deposits are: ${totalDeposits}</p>
    </div>
  );
}
