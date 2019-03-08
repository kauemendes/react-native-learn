import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Default from '../styles/Default';

export default class Evento extends Component {
    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({
            texto
        })
    }

    render() {
        return (
            <View style={{backgroundColor: '#fff', paddingTop: 40}}>
                <Text style={Default.fonte40}>{this.state.texto}</Text>
                <TextInput 
                    style={Default.input} 
                    onChangeText={this.alterarTexto} />
            </View>
        )
    }
}