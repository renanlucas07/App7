import React from 'react';
import { View } from 'react-native';
import Number from './Number';
import Styles from '../styles/sheets';

export default props => (
  <View style={Styles.numberView}>
    <Number
      update={props.update}
      num={props.num1}
      name='num1'
    />
    <Number
      update={props.update}
      num={props.num2}
      name='num2'
    />
  </View>
);