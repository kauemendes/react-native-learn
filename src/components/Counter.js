import React, {Component} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Counter extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            number: this.props.valorInicial
        }
    }


    sumOne() {
        this.setState({
            number: this.state.number + 1
        })
    }

    zeroDecre = () => {
        this.setState({
            number: this.props.valorInicial 
        })
    }

    render() {
        return (
            <View style={{backgroundColor: '#fff', paddingTop: 40}}>
                <Text style={{fontSize: 30}}>{this.state.number}</Text>
                <TouchableHighlight
                    onPress={() => this.sumOne()}
                    onLongPress={this.zeroDecre}
                    >
                    <Text style={{fontSize: 30}}>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }

}