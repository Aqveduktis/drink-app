import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  background-color: papayawhip;
`;

const StyledText = styled.Text`
  color: palevioletred;
`;

const RotatedBox = styled.View`
  transform: rotate(90deg);
  text-shadow-offset: 10px 5px;
  font-variant: small-caps;
  margin: 5px 7px 2px;
`;

export const Card = () => {

    return (
      <View style={{ marginTop: 50 }}>
        <StyledView>
          <StyledText>Hello World!</StyledText>
        </StyledView>
        <RotatedBox />
      </View>
    );
  }
