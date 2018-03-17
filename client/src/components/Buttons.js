import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Buttons extends Component {
  render() {
    return (
      <div>
        {this.props.counter}
        <Button onClick={this.props.increment}> INC</Button>
      </div>
    );
  }
}

export default Buttons;
