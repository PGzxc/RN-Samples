import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ImageResizeModesComponent = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={{
                        resizeMode: 'cover',
                        height: 100,
                        width: 200,
                    }}
                    source={require('../images/flower1.jpg')}
                />
                <Text>resizeMode : cover</Text>
            </View>
            <View>
                <Image
                    style={{
                        resizeMode: 'contain',
                        height: 100,
                        width: 200,
                    }}
                    source={require('../images/flower1.jpg')}
                />
                <Text>resizeMode : contain</Text>
            </View>
            <View>
                <Image
                    style={{
                        resizeMode: 'stretch',
                        height: 100,
                        width: 200,
                    }}
                    source={require('../images/flower1.jpg')}
                />
                <Text>resizeMode : stretch</Text>
            </View>
            <View>
                <Image
                    style={{
                        resizeMode: 'repeat',
                        height: 100,
                        width: 200,
                    }}
                    source={require('../images/flower1.jpg')}
                />
                <Text>resizeMode : repeat</Text>
            </View>
            <View>
                <Image
                    style={{
                        resizeMode: 'center',
                        height: 100,
                        width: 200,
                    }}
                    source={require('../images/flower1.jpg')}
                />
                <Text>resizeMode : center</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
    },
});

export default ImageResizeModesComponent;
