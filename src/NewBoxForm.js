import React, { Component } from 'react';
import uuid from 'uuid/v4';

class NewBoxForm extends Component {
  //Should render form that creates new box
  //Create a form that takes in width, height, background color
  // When form is submitted, clear values

  constructor(props) {
    super(props);
    this.state = {
      height: '',
      width: '',
      color: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSubmit(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = { ...this.state, id: uuid() };
    this.props.createBox(newBox);
    this.setState({
      height: '',
      width: '',
      color: ''
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='height'>Height: </label>
          <input
            type='text'
            id='height'
            name='height'
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='width'>Width: </label>
          <input
            type='text'
            id='width'
            name='width'
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='color'>Color: </label>
          <input
            type='text'
            id='color'
            name='color'
            value={this.state.color}
            onChange={this.handleChange}
          />
        </div>
        <button>Create A Box!</button>
      </form>
    );
  }
}

export default NewBoxForm;
