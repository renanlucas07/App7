import React from 'react';
import { View, Text } from 'react-native';
import Input from './Input';
import Operation from './Operation';
import Command from './Command';

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: '',
      num2: '',
      operation: 'sum'
    }

    this.calculate = this.calculate.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.updateOperation = this.updateOperation.bind(this);
  }

  calculate() {
    const resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
  }

  updateValue(name, number) {
    let obj = {}
    obj[name] = number;
    this.setState(obj);
  }
  
  updateOperation(op) {
    this.setState({
      operation: op
    });
  }
  render() {
    return (
      <View>
        <Input
          update={this.updateValue}
          num1={this.state.num1}
          num2={this.state.num2}
        />
        <Operation
          operation={this.state.operation}
          update={this.updateOperation}
        />
        <Command action={this.calculate} />
      </View> 
    );
  }
}
export { Panel };