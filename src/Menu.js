import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import ParImpar from './components/ParImpar';
import Simples from './components/Simples';
import { Inverter, MegaSena } from './components/Mult';
import Counter from './components/Counter';
import Platforms from './components/Platforms'
import ValidateProp from './components/ValidateProp'
import Evento from './components/Event';
import { Avo } from './components/ComunicaDireta';
import TextoSincronizado from './components/ComunicaIndireta';
import ListaAlunos from './components/ListaAlunos';
import Flex from './components/Flex';

const AppNavigator = createDrawerNavigator({
    Flex: {
        screen: Flex,
        navigationOptions: { title: 'Teste Flex' }
    },
    ListaAlunos: {
        screen: ListaAlunos,
        navigationOptions: { title: 'Lista de Alunos' }
    },
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: { title: 'Texto Sincronizado' }
    },
    Avo: {
        screen: () => <Avo nome="Marcelo" sobrenome="Almeida" />
    },
    Evento: {
        screen: Evento
    },
    ValidateProp: {
        screen: () => <ValidateProp ano={19} />,
        navigationOptions: { title: 'Validação' }
    },
    Platforma: {
        screen: Platforms,
        navigationOptions: { title: 'Plataformas' }
    },
    Counter: {
        screen: () => <Counter valorInicial={1000} />,
        navigationOptions: { title: 'Contador' }
    },
    MegaSena: {
        screen: () => <MegaSena numeros={9} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter text='Roma até cubanos!' />
    },
    ParImpar: {
        screen: () =>  <ParImpar number='22' />,
        navigationOptions: { title: 'Par ou Impar' }
    },
    Simples: {
        screen: () => <Simples text='Texto Aqui Alow' />
    }
}, { drawerWidth: 300, drawerBackgroundColor: '#fff', drawerPosition: 'left' })

export default createAppContainer(AppNavigator);