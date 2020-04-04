import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

const PinkButton = styled.TouchableOpacity`
  background: pink;
  border-radius: 3px;
  border: 1px solid black;
  color: white;
`;


export const MyButton = () => {
    return (
      <View>
      <PinkButton
       
        title="Press me"
        onPress={() => alert('Hi!')}>
<Text>Press me</Text>
        </PinkButton>
        </View>
    );
  }
  

