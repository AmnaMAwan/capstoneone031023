// LoginPage.js

import React from 'react';
import { Route } from 'react-router-dom';
import { useUserContext } from '../pages/context-gpt';

function LoginPage() {
  const { updateUser } = useUserContext();

  const handleLogin = () => {
    // Simulate user login and get user data
    const userData = { name: 'John Doe' }; // Replace with actual user data

    updateUser(userData); // Set the user data in the context

    // Redirect to another page or perform other actions after login
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
