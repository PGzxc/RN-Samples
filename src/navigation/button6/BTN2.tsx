import * as React from 'react';
import {Button, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function LogoTitle() {
    return (
        <Image
            style={{width: 50, height: 50}}
            source={{uri:'https://bkimg.cdn.bcebos.com/pic/8718367adab44aed2e73f6ebca4a9001a18b87d64d3f?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70'}}
        />
    );
}

function HomeScreen({navigation}) {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => setCount((c) => c + 1)} title="Update count"/>
            ),
        });
    }, [navigation, setCount]);

    return <Text>Count: {count}</Text>;
}

const Stack = createNativeStackNavigator();

export default function BTN2() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={({navigation, route}) => ({
                        headerTitle: (props) => <LogoTitle {...props} />,
                        // Add a placeholder button without the `onPress` to avoid flicker
                        headerRight: () => (
                            <Button title="Update count"/>
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


