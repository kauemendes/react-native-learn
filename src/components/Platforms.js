import React from 'react';
import { View, Button, Alert, ToastAndroid, Platform } from 'react-native'

export default props => {
    const notify = msg => {
        if(Platform.OS == 'android') {
            ToastAndroid.show(msg, ToastAndroid.LONG)
        } else {
            Alert.alert('Information', msg)
        }
    }

    return (
        <View style={{backgroundColor: '#fff', paddingTop: 40}}>
            <Button title='Platform?'
                onPress={() => notify('Parabéns voce clicou!')} />
        </View>
    )
}