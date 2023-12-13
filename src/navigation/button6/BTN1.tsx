import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
        </View>
    );
}

function LogoTitle() {
    return (
        <Image
            style={{width: 50, height: 50}}
            source={{uri:'https://bkimg.cdn.bcebos.com/pic/8718367adab44aed2e73f6ebca4a9001a18b87d64d3f?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70'}}
        />
    );
}

export default function BTN1() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerTitle: (props) => <LogoTitle {...props} />,
                        headerRight: () => (
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="Info"
                                color="#00cc00"
                            />
                        ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


