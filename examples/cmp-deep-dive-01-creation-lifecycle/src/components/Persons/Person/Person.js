import React, { Component } from 'react';

import classes from './Person.css';

class Person extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("get derived")
    return state
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log("updating or not")
    return true
  }

  getSnapshotBeforeUpdate(nProps, nState) {
    console.log("snaopshot time")
    return { message: "value" }
  }
  componentDidUpdate(nProps, nState, message) {
    console.log("did update")
    console.log("message", message)

  }
  render() {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
      </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}
export default Person;
