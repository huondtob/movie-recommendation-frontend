import React from 'react';

export default class InputField extends React.Component {

handleInput(e){
  const keyword = e.target.value;
  this.props.getRecommendations(keyword);
}

  render() {
    return (
      <div id="inputField">
        <h2> InputField </h2>
        <input onChange={this.handleInput.bind(this)}/>
      </div>
    );
  }
}
