import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import styled from "styled-components/native"
import {Container, Paragraf} from '../App'



const DrinkDetail = ({route}) => {
const {drink} = route.params
//const imageUrl = `https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg` 

    return(
        <Container>
            <Paragraf>Hello from detail</Paragraf>
    <Paragraf>{drink.strDrink}</Paragraf>
    <Image
    source = {{uri:drink.strDrinkThumb}} style = {{width: 350, height: 350}}
    />
        </Container>
    )
}
export default DrinkDetail