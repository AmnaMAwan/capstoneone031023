// context-gpt.js

import { createContext, useContext, useState } from 'react';

const UserContext = createContext();
const DepositContext=createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const useDepositContext = () => {
  return useDepositContext(DepositContext);
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '' }); // Initialize with an empty name
  const [deposit, setDeposit] = useState({ deposit:0 });

  const updateUser = (newUser) => {
    setUser(newUser);
    const updateDeposit = (newDeposit) => {
      setDeposit(newDeposit);

  }};

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
