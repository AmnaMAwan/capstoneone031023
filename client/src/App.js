import logo from './logo.svg';
import Ract from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage'
import HomePage from './components/Home'
import DashboardPage from './components/Dashboard';
import { UserProvider } from './pages/context-gpt'
import NavigationBar from './components/navbar'
import { useUserContext } from './pages/context'
import Dashboard from './components/Dashboard';
import './App.css';
function App() {
  const { user } = useUserContext();
user.name='jamal'
  return (
    <>
    
    <Router>
      <UserProvider>
        <NavigationBar/>
        <Routes>
          <Route  exact path="/" component={LoginPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/dashboard" component={DashboardPage} />
        </Routes>
      </UserProvider>
    </Router>

    <div>
          <p>User Name: {user.name}</p>
        </div>  
    </>
  );
}

export default App;
/*
// MyComponent.js
import React from 'react';
import { useUserContext } from './context'; // Import your context

function MyComponent() {
  const { user } = useUserContext();

  return (
    <div>
      <p>User Name: {user.name}</p>
    </div>
  );
}

export default MyComponent;


*/