import React from 'react';

import Body from './Layout/Body';
import Footer from './Layout/Footer';
import Header from './Layout/Header';


export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Hoi Fritz",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  getServerData(){
    const url = 'http://localhost:3001'
    fetch(url)
    .then(function(response) {
    console.log(response);
})
  }
  render() {
    this.getServerData();
    const movie = {
      title: "The Rock",
      dureation: "94",
      genre: "Action",
    };
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title ={this.state.title}/>
        <Body movie={movie} />
        <Footer />
      </div>
    );
  }
}
