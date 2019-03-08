import React, {Component} from 'react';
import { View, Text } from 'react-native';

const fonte = { style:  {fontSize: 30 } }

const filhosProps = props => {
    return React.Children.map(props.children, 
        c => React.cloneElement(c, {...props, ...c.props}))
}

export const Filho = props => 
    <View>
        <Text {...fonte}>Filhos: {props.nome} {props.sobrenome}</Text>
    </View>


export const Pai = props => 
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {filhosProps(props)}
    </View>

export const Avo = props => 
    <View>
        <Text {...fonte}>Avo: {props.nome} {props.sobrenome}</Text>
        <Pai nome="Auzelino" sobrenome="Mendes de Freitas">
            <Filho nome="Rachel"  />
            <Filho nome="Cristina" />
            <Filho nome="Tabajara" />
        </Pai>
        <Pai {...props} nome="João">
            <Filho nome="Sergio" />
            <Filho nome="Renato" />
        </Pai>
    </View>