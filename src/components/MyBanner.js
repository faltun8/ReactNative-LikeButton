import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const MyBanner = (props) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {props.data.map(item =>{
                return(
                    <Image
                    source={{uri:item.imageUrl}}
                    style={styles.image}
                    />
                )
            })}
        </ScrollView>
    )
}

export {MyBanner}

const styles = StyleSheet.create({
    image:{
        width: Dimensions.get('window').width*0.9,
        height: Dimensions.get('window').height/4,
        margin:10,
        borderRadius:10,
    }
})
