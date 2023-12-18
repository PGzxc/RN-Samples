import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const tabs = [
    {title: '未读消息', component: HomeScreen},
    {title: '已读消息', component: SettingsScreen},
]

function HomeScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

export default function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarLabelStyle: {fontSize: 12},
                tabBarStyle: {backgroundColor: 'lightgray'},
            }}>
                {
                    tabs.map((tabItem) => {
                        return (
                            <Tab.Screen name={tabItem.title} component={tabItem.component}/>
                        )
                    })
                }
                {/*<Tab.Screen name="Home" component={HomeScreen} />*/}
                {/*<Tab.Screen name="Settings" component={SettingsScreen} />*/}
            </Tab.Navigator>
        </NavigationContainer>
    );
}
