import {Text, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

function HomeScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

const Nav1 = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home12" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Nav1
