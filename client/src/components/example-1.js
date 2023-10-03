import React from 'react';
import { useUserContext } from '../pages/context' 

function ExampleComponent() {
  const { user } = useUserContext();

  return (
    <div>
      <h1>Welcome, {user.name} om Examole </h1>
      {/* Display other content here */}
    </div>
  );
}

export default ExampleComponent;
