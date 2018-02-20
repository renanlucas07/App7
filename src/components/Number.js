import React from 'react';
import { TextInput } from 'react-native';
import Styles from '../styles/sheets';

export default props => (
  <TextInput style={Styles.number}
    keyboardType='numeric'
    value={props.num}
    onChangeText={fieldValue => props.update(props.name, fieldValue)}
  />
);