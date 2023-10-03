import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import usersContext from './pages/context'
import { UserProvider } from './pages/context';


const root = ReactDOM.createRoot(document.getElementById('root'));



function Spa()
{
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
  
  export Spa




}

//const userindex=userContext
root.render(
  <UserProvider>

  <React.StrictMode>
    <App />
    <h1>mmm</h1>
  </React.StrictMode>
  </UserProvider>
);


