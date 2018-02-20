import React, { Component } from 'react';
import { Picker } from 'react-native';
import Styles from '../styles/sheets';

export default class Operation extends Component {
  

  render() {
    return(
      <Picker
        style={Styles.picker}
        selectedValue={this.props.operation}
        onValueChange={op => {
          this.props.update(op);
        }}
      >
        <Picker.Item label='Soma' value='sum' />
        <Picker.Item label='Subtração' value='sub' />
      </Picker> 
    );
  }
}