import { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const UserContext = createContext([]);
export const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  function handleSubmitLogin(e) {
    e.preventDefault();
    if (email && password) {
      //navigate to...
    }
    console.log(`SubmittingLogin: ${username}, ${email}, ${password}`);
  }

  function handleSubmitSignup(e) {
    e.preventDefault();
    if (email && password) {
      //navigate to...
    }
    console.log(`SubmittingSignup: ${username}, ${email}, ${password}`);
  }

  function validatePassword(password, passwordConfirm) {
    if (password !== passwordConfirm) {
      alert('Your password does not match');
    }
  }

  function validateEmail(email, emailConfirm) {
    if (email !== emailConfirm) {
      alert('Your email does not match');
    }
  }

  function isUserLoggedIn(username) {}

  function logout(username) {}

  return (
    <UserContext.Provider
      value={{
        username,
        password,
        email,
        handleSubmitLogin,
        handleSubmitSignup,
        validateEmail,
        validatePassword,
        isUserLoggedIn,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
