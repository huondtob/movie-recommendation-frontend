import React from 'react';

import Body from './Layout/Body';
import Footer from './Layout/Footer';
import Header from './Layout/Header';


export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
