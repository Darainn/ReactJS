import React from 'react';

const Footer = () => {

  const year = new Date().getFullYear();
  return (
      <>
        <footer>
            <p> &copy; All rights are Reserved {year} </p>
        </footer>
      </>
  );
};
export default Footer;