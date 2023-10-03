// React code

import React, { useState } from 'react';

export default function DepositList() {
  const [name, setName] = useState('');
  const [deposits, setDeposits] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5050/api/deposits/${name}`);
      if (response.ok) {
        const data = await response.json();
        setDeposits(data);
      } else {
        console.error('Failed to fetch deposits');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Deposit List</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Deposit</th>
          </tr>
        </thead>
        <tbody>
          {deposits.map((deposit) => (
            <tr key={deposit._id}>
              <td>{deposit.name}</td>
              <td>${deposit.deposit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
