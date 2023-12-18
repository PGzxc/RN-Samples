import React from 'react';
import {Text, Dimensions, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const {width: kW, height: kH} = Dimensions.get('window');
const colors = ['tomato', 'thistle', 'skyblue', 'teal'];
const dummyData = [
    {
        id: 1,
        img: 'https://picsum.photos/400/600?random=1',
        title: 'Element 1',
        description: 'Pressable and animated pagination',
        price: 'Fast',
    },
    {
        id: 2,
        img: 'https://picsum.photos/400/600?random=2',
        title: 'Element 2',
        description: 'Full customization for carousel',
        price: 'Simple',
    },
    {
        id: 3,
        img: 'https://picsum.photos/400/600?random=3',
        title: 'Element 3',
        description: 'Accessible for VoiceOver',
        price: 'Efficient',
    },
];


export default function SwiperFlatlist() {
    return (
        <View style={{width: kW, height: 230}}>
            <SwiperFlatList
                autoplay
                autoplayDelay={3}
                autoplayLoop
                index={0}
                showPagination
                data={dummyData}
                renderItem={({item}) => (
                    <TouchableOpacity key={item.id} activeOpacity={0.7} onPress={() => {
                        console.log('item>>>', JSON.stringify(item));
                    }}>
                        <Image style={{width: kW, height: 230}} source={{uri: item.img ?? ''}}/>
                        {/*// <View style={[styles.child, {backgroundColor: item}]}>*/}
                        {/*//     <Text style={styles.text}>{item}</Text>*/}
                        {/*// </View>*/}
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'white'},
    child: {width, justifyContent: 'center'},
    text: {fontSize: width * 0.5, textAlign: 'center'},
});
