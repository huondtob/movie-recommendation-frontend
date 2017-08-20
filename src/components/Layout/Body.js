import React from 'react';

import InputField from './Body/InputField';
import MovieGrid from './Body/MovieGrid';


export default class Body extends React.Component {

getRecommendations(keyword) {
  console.log(keyword);
  return null
}

  render() {
    const movies = ['The Rock', 'Batman', 'Superman', 'Planets of the Apes']
    return (
      <div id="body">
        <h1> Body </h1>
        <InputField getRecommendations={this.getRecommendations.bind(this)}/>
        <MovieGrid movies={movies}/>
      </div>
    );
  }
}
