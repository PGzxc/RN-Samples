import React from 'react'
import Toast from 'react-native-toast-message';
import {Button, View} from 'react-native'


export function ToastExample() {
    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Hello',
            text2: 'This is some something 👋'
        });
    }

    return (
        <View style={{marginTop:160}}>
            <Button
                title='显示 toast'
                onPress={showToast}/>
        </View>
    )
}
