import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import productData from './product_data.json';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';


const App = () => {


  const [searched, setSearched] = useState('');
  const [displayList, setDisplayList] = useState([]);

  const renderListItem = ({item}) => <ProductCard product={item} />;

  useEffect(() => {
    setDisplayList(productData);
  }, []);

  useEffect(() => {
    const filteredValue = productData.filter((item) => {
      const upperSearched = searched.toUpperCase();
      const upperItem = item.title.toUpperCase();

      return upperItem.indexOf(upperSearched) > -1;
    });
    setDisplayList(filteredValue)
  }, [searched]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.banner}>MyShop!</Text>
      <SearchBar sendText={(myValue) => setSearched(myValue)}/>
      <FlatList
        style={{flex: 1}}
        data={displayList}
        renderItem={renderListItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  banner: {
    fontSize: 50,
    fontWeight: '800',
    color: '#e91e63',
    alignSelf: 'center',
  },
  searchBar: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
