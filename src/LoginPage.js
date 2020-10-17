import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName] = useState('')

  const login = () => {
    Alert.alert('CAUTION', `Email: ${email}, Password: ${password}`);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <Text style={{fontSize:25}}>{`Hello ${name} `}</Text>
        </View>
        <View style={styles.input}>
            <TextInput
            placeholder="Your Name"
            onChangeText={(userName) => setName(userName)}
            />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Enter Your E-mail address"
            onChangeText={(userText) => setEmail(userText)}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Enter Your E-mail address"
            onChangeText={(userPassword) => setPassword(userPassword)}
            secureTextEntry={true}
          />
        </View>
        <Button title="Enter" onPress={login} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e0e0e0',
    width: Dimensions.get('window').width * 0.8,
    height: 30,
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5,
    padding:10,
  },
});
