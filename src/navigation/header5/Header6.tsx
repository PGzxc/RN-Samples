import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={{uri:'https://bkimg.cdn.bcebos.com/pic/8718367adab44aed2e73f6ebca4a9001a18b87d64d3f?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70'}}
        />
    );
}

const Stack = createNativeStackNavigator();

export default function Header6() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


