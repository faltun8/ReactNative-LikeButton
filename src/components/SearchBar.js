import React, { useEffect, useState } from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const SearcBar = (props) => {
    const [newSearched,setNewSearched] = useState('')
    useEffect(() => {
        props.sendText(newSearched)
    },[newSearched])


  return (
    <View style={styles.searchBar}>
      <TextInput 
      placeholder="Search item" 
      onChangeText={(value) => setNewSearched(value)}
      />
    </View>
  );
};

export default SearcBar;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
