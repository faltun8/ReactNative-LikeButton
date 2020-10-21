import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';

// {
//     "id": 0,
//     "userName": "tesla_nikola",
//     "img": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/18-nikola-tesla-edward-watts.jpg",
//     "description": "Cillum ad sit eiusmod magna sunt enim et velit duis elit eiusmod in. Sunt fugiat occaecat sunt nulla commodo nulla in non laboris reprehenderit ex. Consequat velit in veniam occaecat. Magna dolor amet cupidatat enim duis amet anim consectetur irure Lorem ea consectetur. Sint sunt in anim laboris incididunt aliqua enim. Sunt exercitation proident exercitation voluptate reprehenderit irure eu ipsum officia non officia cupidatat consequat incididunt. Duis sunt dolor elit enim sint minim.",
//     "isLiked": false
// },

const MyProductCard = ({product}) => {
  const [like, setLike] = useState(product.isLiked);

  const tap = () => like ? setLike(false) : setLike(true)

  

  return (
    <View>
      <Image style={styles.image} source={{uri: product.img}} />
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>{product.userName}</Text>
          <TouchableOpacity onPress={tap}>
            <Image
              style={like ? styles.heartTrue : styles.heartFalse}
              source={require('./images/heart.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.desc}>{product.description}</Text>
      </View>
    </View>
  );
};

export default MyProductCard;

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('window').height / 4,
  },
  title: {
    fontSize: 20,
    margin: 5,
    padding: 5,
    fontWeight: 'bold',
  },
  desc: {
    margin: 5,
    padding: 5,
  },
  heartFalse: {
    height: Dimensions.get('window').height / 40,
    width: 25,
    resizeMode: 'cover',
    margin: 15,
    padding: 5,
    opacity: 0.2,
  },
  heartTrue: {
    height: Dimensions.get('window').height / 40,
    width: 25,
    resizeMode: 'cover',
    margin: 15,
    padding: 5,
    opacity: 1,
    tintColor: 'red',
  },
});
