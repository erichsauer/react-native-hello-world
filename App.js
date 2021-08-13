import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TextInput } from 'react-native';
const kitten = require('./kitten.jpeg')

export default function App()
{
  const [ pressedCount, setPressedCount ] = useState(0)
  const [name, setName] = useState('')
  
  return (
    <View style={styles.container}>
      <Text style={{marginTop: 50}}>hello world!</Text>
      <Text>my name is erich</Text>
      <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 30}}>this is my first react native app!</Text>
        <Text style={{ margin: 16 }}>
          {pressedCount > 0
            ? `The button was touched ${pressedCount} times!`
            : `No button touches yet!`}
        </Text>
      <Button
      title='touch me'
      onPress={() => setPressedCount(current => current + 1)}
      disabled={pressedCount >=3}
      />
      <Text style={{margin: 20}}>
        {name ? `Hi ${name}!` : `What is your name?`}
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: 'white', width: 100, marginBottom: 50 }} onChangeText={text => setName(text)}
        secureTextEntry={true}
      />
      <ScrollView horizontal={true}>
            <Kitten borderColor='red' />
            <Kitten borderColor='green' />
            <Kitten borderColor='blue' />
            <Kitten borderColor='purple' />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'peachpuff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 3,
    margin: 10
  }
});

export const Kitten = ({ borderColor }) => (
  <Image style={{...styles.image, borderColor}} source={kitten}/>
  );