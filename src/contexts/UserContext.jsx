import { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const UserContext = createContext([]);
export const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting ${username}, ${email}, ${password}`);
  };
};
