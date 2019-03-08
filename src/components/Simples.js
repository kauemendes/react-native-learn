import React from 'react';
import {Text, View} from 'react-native';
import Default from '../styles/Default';

export default props => {
    return (
        <View style={{backgroundColor: '#fff', paddingTop: 40}}>
            <Text style={[Default.ex]}>Arrow1: {props.text}</Text>
        </View>
    )
}