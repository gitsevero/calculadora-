
import { Platform, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Button from './src/components/Button';
import Display from './src/components/Display';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.button}>
        <Button label='AC'></Button>
        <Button label='/'></Button>
        <Button label='7'></Button>
        <Button label='8'></Button>
        <Button label='9'></Button>
        <Button label='*'></Button>
        <Button label='4'></Button>
        <Button label='5'></Button>
        <Button label='6'></Button>
        <Button label='-'></Button>
        <Button label='1'></Button>
        <Button label='2'></Button>
        <Button label='3'></Button>
        <Button label='+'></Button>
        <Button label='0'></Button>
        <Button label='.'></Button>
        <Button label='='></Button>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',

  }
});

