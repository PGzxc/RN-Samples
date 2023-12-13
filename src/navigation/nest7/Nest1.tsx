import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function Settings({route, navigation}) {
    const {user} = route.params;
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Settings Screen</Text>
            <Text>userParam: {JSON.stringify(user)}</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
}

function Profile({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Profile Screen</Text>
        </View>
    );
}

function Messages({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
        </View>
    );
}

function Feed({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
        </View>
    );
}


function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="Messages" component={Messages}/>
        </Tab.Navigator>
    );
}

export default function Nest1() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                />
                <Stack.Screen name="Profile" component={Profile}/>
                <Stack.Screen name="Settings" component={Settings}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
