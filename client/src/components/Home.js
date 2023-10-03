// HomePage.js

import React from 'react';
import { useUserContext } from '../pages/context-gpt';

function HomePage() {
  const { user } = useUserContext();

  return (
    <div>
      <h1>Welcome to the Home Page, {user.name}</h1>
      {/* Add content for the home page */}
    </div>
  );
}

export default HomePage;
