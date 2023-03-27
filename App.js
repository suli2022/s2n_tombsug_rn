/*
* File: App.js
* Author: Erős István
* Copyright: 2023, Erős István
* Group: Szoft II N
* Date: 2023-03-27
* Github: https://github.com/erosistvan/
* Licenc: GNU GPL
*/

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';

function calcRadius(side, alpha) {
  let rad = alpha * Math.PI / 180;
  let radius = 1.0 / 2.0 * side * Math.sin(rad);
  return radius;
}


export default function App() {
  const [side, setSide] = useState('');
  const [alpha, setAlpha] = useState('');
  const [radius, setRadius] = useState('');

  function startCalculation() {
    let radius = calcRadius(side, alpha);
    setRadius(radius);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Tombsug
      </Text>

      <View style={styles.body}>
        <Text>Rombuszba írható kör sugara</Text>
        <Text>Oldal</Text>
        <TextInput style={styles.input}
          onChangeText={sideInput => setSide(sideInput)}
        />
        <Text>Alfa szög</Text>

        <TextInput 
        style={styles.input}
          onChangeText={alphaInput => setAlpha(alphaInput)}
        />

        <Button 
        onPress={startCalculation}
        style={styles.button}
        />

        <Text>Sugár</Text>
        <TextInput 
        style={styles.input}
          value={radius}
        />

      </View>

      <View>
        <Text>
          Erős István, Szoft II N, 2023-03-27
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'gold',
    width: '100%',
    height: 60,
    textAlign: 'center',
    fontSize: 44,
  },
  input: {
    backgroundColor: 'white',
    height: 35,
    width: '90%',
  },
  body: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
