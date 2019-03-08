import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ParImpar from './components/ParImpar';
import Simples from './components/Simples';
import { Inverter, MegaSena } from './components/Mult';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples text='Texto Aqui Alow' />
        <ParImpar number='22'/>
        <Inverter text='ReactNativo'></Inverter>
        <MegaSena numeros={6} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
