import React from 'react';
import { View, Text } from 'react-native';
import Input from './Input';
import Operation from './Operation';
import Command from './Command';

const Panel = props => (
  <View>
    <Input
      update={props.updateValue}
      num1={props.num1}
      num2={props.num2}
    />
    <Operation
      operation={props.operation}
      update={props.updateOperation}
    />
    <Command action={props.calculate} />
  </View> 
);
export { Panel };