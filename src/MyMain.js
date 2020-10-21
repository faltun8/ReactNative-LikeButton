import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import myData from './myData.json';
import MyProductCard from './components/MyProductCard'



const App = () => {

    const renderListItem = ({item}) => <MyProductCard product={item} />

    return(
        <SafeAreaView>
            <View>
                <FlatList
                    data={myData}
                    renderItem={renderListItem }
                    keyExtractor={(item,index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    );
};

export default App;