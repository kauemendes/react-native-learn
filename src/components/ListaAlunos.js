import React, {Component} from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const alunos = [
   { id: 1, nome:  "Bruno", nota: 7.2},
   { id: 2, nome:  "Mauricio", nota: 2.2},
   { id: 3, nome:  "Kaue", nota: 3.2},
   { id: 4, nome:  "Francisco", nota: 6.1},
   { id: 5, nome:  "Thiago", nota: 9.2},
   { id: 6, nome:  "Jonathan", nota: 7.4},
   { id: 7, nome:  "Oswald", nota: 6.1},
   { id: 8, nome:  "Jorge", nota: 9.1},
   { id: 9, nome:  "Marcus", nota: 10.0},
   { id: 10, nome:  "Marcus", nota: 10.0},
   { id: 11, nome:  "Bruna", nota: 7.2},
   { id: 12, nome:  "Ana", nota: 2.2},
   { id: 13, nome:  "Claudio", nota: 3.2},
   { id: 14, nome:  "Andre", nota: 6.1},
   { id: 15, nome:  "Roberto", nota: 9.2},
   { id: 16, nome:  "Thiago", nota: 7.4},
   { id: 17, nome:  "Tales", nota: 6.1},
   { id: 18, nome:  "Samantha", nota: 9.1},
   { id: 19, nome:  "Samara", nota: 10.0},
];

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    flexDirection: 'row',
    // Eixo principal
    alignItems: 'center',

    // Cross axis
    justifyContent: 'space-between',
}

export const Aluno = props => 
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({item}) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}
