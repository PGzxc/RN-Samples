import React, {useEffect} from 'react'
import {Button, View} from 'react-native'
import { useToast, Toast} from "react-native-toast-notifications";

export function ToastNotify() {
    const toast = useToast();
    // useEffect(() => {
    //     //toast.show("Hello World");
    //     showToast()
    // }, []);

    const showToast = () => {
        toast.show("Hello World");
    }
    return (
        <View style={{marginTop: 160}}>
            <Button
                title='显示 toast'
                onPress={showToast}/>
        </View>
    )
}
