import React from 'react';
import Main from './Main';
import Footer from './Footer';
import HeaderContainer from '../containers/HeaderContainer';

export default function App() {
  return (
    <div>
      <HeaderContainer />
      <Main />
      <Footer />
    </div>
  );
}
