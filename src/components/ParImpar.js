import React from 'react';
import { View, Text } from 'react-native';
import Default from '../styles/Default'
import If from './If';

function parOuImpar(number) {
    const v = number % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={Default.ex}>{v}</Text>
}

export default props => 
    <View style={{backgroundColor: '#fff', paddingTop: 40}}>
        <If test={props.number % 2 == 0}>
            <Text style={Default.ex}>Par</Text>
        </If>
        <If test={props.number % 2 != 0}>
            <Text style={Default.ex}>Impar</Text>
        </If>
    </View>