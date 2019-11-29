import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import './style.scss';

import NavBar from '../NavBar';
import Footer from '../Footer';
import Admin from '../../pages/Admin';

function App({ children, user, match }) {
  const { id } = user.data ? user.data.results.user.role : { id: 0 };

  console.log('match: ', match);

  if (!id) {
    return (
      <Fragment>
        <NavBar />
        {children}
        <Footer />
      </Fragment>
    );
  } else {
    return <Admin match={match} />;
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(App);
