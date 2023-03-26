import { createContext } from 'react';

export const UserContext = createContext([]);
export const UserContextProvider = ({ children }) => {
  const userFirstName = JSON.parse(localStorage.getItem('userFN'));
  const userLastName = JSON.parse(localStorage.getItem('userLN'));
  const userEmail = JSON.parse(localStorage.getItem('userEmail'));
  localStorage.getItem('userFN');
  return (
    <UserContext.Provider value={{ userFirstName, userLastName, userEmail }}>
      {children}
    </UserContext.Provider>
  );
};
