import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Top, Result, Panel } from './src/components';

class app7 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: '',
      num2: '',
      operation: 'sum',
      result: ''
    };

    this.calculate       = this.calculate.bind(this);
    this.updateValue     = this.updateValue.bind(this);
    this.updateOperation = this.updateOperation.bind(this);
  }

  calculate() {
    let resultado;
    if(this.state.operation === 'sum')
      resultado = (parseFloat(this.state.num1) + parseFloat(this.state.num2)).toString();
    else if(this.state.operation === 'sub')
      resultado = (parseFloat(this.state.num1) - parseFloat(this.state.num2)).toString();
    if (resultado !== 'NaN')
      this.setState({ result: resultado });
    console.log(resultado);
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
    return(
      <View>
        <Top />
        <Result result={this.state.result} />
        <Panel
          num1={this.state.num1}
          num2={this.state.num2}
          operation={this.state.operation}
          calculate={this.calculate}
          updateOperation={this.updateOperation}
          updateValue={this.updateValue}
        />
      </View>
    );
  }
}

export default app7;