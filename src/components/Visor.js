import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Styles from '../styles/sheets';

export default class Visor extends Component {
constructor(props) {
  super(props);

  this.state = {
    result: ''
  }
}

  render() {
    return (
      <View>
        <TextInput 
          placeholder='Resultado'
          editable={false}
          style={Styles.txtInput}
          value={this.state.result}
        />
      </View> 
    );
  }
}