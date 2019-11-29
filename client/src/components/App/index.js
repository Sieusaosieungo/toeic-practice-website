import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import './style.scss';

import NavBar from '../NavBar';
import Footer from '../Footer';
import Admin from '../../pages/Admin';

function App({ children, user }) {
  const { id } = user.data ? user.data.results.user.role : { id: 0 };

  console.log('role: ', user.data && user.data.results.user);

  if (!id) {
    return (
      <Fragment>
        <NavBar />
        {children}
        <Footer />
      </Fragment>
    );
  } else {
    return <Admin />;
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(App);
