import React, { Component } from 'react';

class Box extends Component {
  //This should display a div with form information passed to it as props
  render() {
    return (
      <div>
        <div
          style={{
            height: `${this.props.height}em`,
            width: `${this.props.height}em`,
            backgroundColor: this.props.color
          }}
        />
        <button onClick={this.props.removeBox}>X</button>
      </div>
    );
  }
}

export default Box;
