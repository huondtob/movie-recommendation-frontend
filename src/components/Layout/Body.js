import React from 'react';

import InputField from './Body/InputField';
import MovieGrid from './Body/MovieGrid';


export default class Body extends React.Component {
  render() {
    return (
      <div id="body">
        <h1> Body </h1>
        <InputField />
        <MovieGrid />
      </div>
    );
  }
}
