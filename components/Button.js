import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

const PinkButton = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  background: pink;
  border-radius: 3px;
  border: 1px solid black;
  color: white;

`;

const ButtonText = styled.Text`
  color: white;
  text-align: center;
`;


export const MyButton = () => {
    return (
      <View>
      <PinkButton
       
        title="Press me"
        onPress={() => alert('Hi!')}>
<ButtonText>Press me</ButtonText>
        </PinkButton>
        </View>
    );
  }
  

