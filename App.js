import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from "styled-components"
import MyButton from './components/Button';
import {Card} from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Drink app from App</Text>
    <Card />
        
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
