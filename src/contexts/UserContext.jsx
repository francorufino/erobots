import { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const UserContext = createContext([]);
export const UserContextProvider = ({ children }) => {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [passwordUser, setPasswordUser] = useState('');
  // const [passwordConfirm, setPasswordConfirm] = useState('');

  // var sha256 = require('js-sha256');
  // var hash = sha256.create();
  // hash.update(passwordUser);

  // console.log('hash pass :   ' + hash);

  function handleSubmitLogin(
    userFName,
    userLName,
    email,
    confirmEmail,
    password,
  ) {
    setUserFirstName(userFName);
    setUserLastName(userLName);
    setEmailUser(email);
    setEmailConfirm(confirmEmail);
    setPasswordUser(password);
  }
  console.log('first name: ' + userFirstName);
  console.log('last name: ' + userLastName);
  console.log('email:  ' + emailUser);
  console.log('email confirm: ' + emailConfirm);

  // function handleSubmitSignup(
  //   userName,
  //   email,
  //   emailConfirm,
  //   password,
  //   passwordConfirm,
  // ) {
  //   console.log(`SubmittingSignup: ${userName}, ${email}, ${password}`);
  // }

  // function validatePassword(password, passwordConfirm) {
  //   if (password === passwordConfirm) {
  //     alert('Your password does match');
  //   }
  // }

  function validateEmail(emailUser, emailConfirm) {
    if (emailUser === emailConfirm) {
      alert('Your email does match');
    } else {
      alert('dont match');
    }
  }

  // function verifyUserLoggedIn(username) {}

  // function logout(username) {}

  return (
    <UserContext.Provider
      value={{
        // username,
        // password,
        emailUser,
        emailConfirm,
        handleSubmitLogin,
        // handleSubmitSignup,
        validateEmail,
        // validatePassword,
        // verifyUserLoggedIn,
        // logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
