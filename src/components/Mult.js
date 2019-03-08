import React from 'react';
import { View, Text } from 'react-native';
import Default from '../styles/Default';

const Inverter = props => {
    const inv = props.text.split('').reverse().join('')
    return (
        <View style={{backgroundColor: '#fff', paddingTop: 40}}>
            <Text style={Default.ex}>{inv}</Text>
        </View>
    )
}

const MegaSena = props => {
    const [min, max] = [1, 60]
    const numeros = Array(props.numeros || 6).fill(0)

    for( let i = 0; i < numeros.length; i++) {
        let novo = 0;
        while(numeros.includes(novo)) {
            novo = Math.floor(Math.random() * (max - min + 1)) + min
        }
        numeros[i] = novo
    }
    numeros.sort((a, b) => a - b)
    return (
        <View style={{backgroundColor: '#fff', paddingTop: 40}}>
            <Text style={Default.ex}>{numeros.join(' - ')}</Text>
        </View>
    )
}

export default Inverter
export { Inverter, MegaSena }