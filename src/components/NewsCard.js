import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const NewsCard = ({news}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source= {{uri: news.imageUrl}}
            />
            <Text style={styles.title}>{news.title}</Text>
            <Text>{news.description}</Text>
        </View>
    )
}

export {NewsCard}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width*0.48,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        padding: 5,
        margin: 5,
        borderRadius: 5

    },
    title:{
        fontWeight: 'bold',
        fontSize: 17,
        marginTop:20
    },
    image: {
        height: Dimensions.get('window').height*0.25,
        borderRadius: 5,
    }
})