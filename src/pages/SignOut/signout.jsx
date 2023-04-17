import React from 'react';

const SignOut = () => {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <section className="signout-container">
      <button type="button" onClick={() => logout()}>
        SignOut
      </button>
    </section>
  );
};

export default SignOut;
