import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from "styled-components/native"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Navigation from 'react-native-navigation';
import DrinkList from './components/DrinkList'
import DrinkDetail from './components/DrinkDetail'

//Fiesta (#DD4132FF) and Jester Red (#9E1030FF) Peach (#EEA47FFF)
//(#D198C5FF) and Cream Gold (#E0C568FF)

export const Container = styled.View`
background-color: #9e1030ff;
flex: 1;
justify-content: center;
align-items: center;

`
export const Paragraf = styled.Text`
color: #e0c568ff;

`

const Stack = createStackNavigator();

const App = () => {

  return (
   
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DrinkList" component={DrinkList}
        />
        <Stack.Screen name='Detail' component={DrinkDetail} />
      </Stack.Navigator>
    </NavigationContainer>

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
export default App