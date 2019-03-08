import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const ValidateProp = props => {
    return (
        <View style={{backgroundColor: '#fff', paddingTop: 40}}>
            <Text style={{fontSize: 35}}>
                {props.label}
                {props.ano + 2000}
            </Text>
        </View>
    )
}

ValidateProp.defaultProps = {
    label: 'Ano: '
}

ValidateProp.PropTypes = {
    ano: PropTypes.number.isRequired
}

export default ValidateProp;