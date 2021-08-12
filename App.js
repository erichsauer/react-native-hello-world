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
        style={{padding: 8, backgroundColor: 'white', width: 100, marginBottom: 50}} />
      <ScrollView horizontal={true}>
        <Image style={{...styles.image, borderColor: 'red'}} source={kitten}/>
        <Image style={{...styles.image, borderColor: 'green'}} source={kitten}/>
        <Image style={{...styles.image, borderColor: 'blue'}} source={kitten}/>
        <Image style={{...styles.image, borderColor: 'orange'}} source={kitten}/>
        <Image style={{ ...styles.image, borderColor: 'purple' }} source={kitten}
         onPress={{}} />
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
