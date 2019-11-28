import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import './style.scss';

import NavBar from '../NavBar';
import Footer from '../Footer';

function App({ children, user }) {
  console.log('user from App.js', user);

  return (
    <Fragment>
      <Fragment>
        <NavBar />
        {children}
        <Footer />
      </Fragment>
    </Fragment>
  );
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(App);
