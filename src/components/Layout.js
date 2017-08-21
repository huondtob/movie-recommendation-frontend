import React from 'react';
import Body from './Layout/Body';
import Footer from './Layout/Footer';
import Header from './Layout/Header';

export default function Layout(props) {
  return (
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}
