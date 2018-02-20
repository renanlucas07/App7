import React from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  top: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: 25,
    color: '#FFF'
  },
  txtInput: {
    height: 100,
    fontSize: 30,
  },
  number: {
    width: 140,
    height: 80,
    fontSize: 20
  },
  numberView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 35
  },
  picker: {
    marginVertical: 15,
    width: 150
  }
});

export default Styles;