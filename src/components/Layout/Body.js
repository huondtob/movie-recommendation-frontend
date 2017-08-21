import React from 'react';
import InputField from './Body/InputField';
import MovieGrid from './Body/MovieGrid';

// Processes the search term from the input field and gets the movies accordingly
export default class Body extends React.Component {
  constructor(){
    super();
    this.state = {
      movies: []
    };

    this.handleSearchRecommendation = this.handleSearchRecommendation.bind(this);
  }

  handleSearchRecommendation(event) {
    const that = this;
    const url = 'http://localhost:3001';

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        that.setState({movies: data});
      });
  }

  render() {
    return (
      <div id="body">
        <h1>Body</h1>
        <InputField onChange={this.handleSearchRecommendation}/>
        <MovieGrid movies={this.state.movies}/>
      </div>
    );
  }
}
