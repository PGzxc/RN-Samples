import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import ActivityIndicatorComponent from "./src/components/ActivityIndicatorComponent";
import BTN1 from "./src/navigation/button6/BTN1";
import ButtonComponent from "./src/components/ButtonComponent";


export default function App() {
    return (
        <ButtonComponent/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
