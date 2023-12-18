import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import ActivityIndicatorComponent from "./src/components/ActivityIndicatorComponent";
import BTN1 from "./src/navigation/button6/BTN1";
import ButtonComponent from "./src/components/ButtonComponent";
import TextInputComponent from "./src/components/TextInputComponent";
import Login from "./src/example/Login";
import {ToastProvider} from 'react-native-toast-notifications'
import {ToastExample} from "./src/utils/ToastExample";
import {ToastNotify} from "./src/utils/ToastNotify";
import HomeToast from "./src/utils/HomeToast";
import SwiperFlatlist from "./src/example/SwiperFlatlist";
import SegmentControl from "./src/example/SegmentControl";
import TabNavigation from "./src/example/TabNavigation";
import GridSample from "./src/example/GridSample";


export default function App() {
    return (
        <ToastProvider>
            <SwiperFlatlist/>
        </ToastProvider>
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
