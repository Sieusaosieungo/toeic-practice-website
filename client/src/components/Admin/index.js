import React, { Fragment } from 'react';

import './style.scss';

import NavBar from '../NavBar';
import Footer from '../Footer';

function Admin({ children }) {
	console.log(children)
  return (
    <Fragment>
        {children}
    </Fragment>
  );
}

export default Admin;
