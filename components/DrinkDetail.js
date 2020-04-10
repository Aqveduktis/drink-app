import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import styled from "styled-components/native"
import {Container, Paragraf} from '../App'



const DrinkDetail = ({route}) => {
const {item} = route.params
//const imageUrl = `https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg` 
const [drinkChoice, setDrinkChoice] = useState({})
const drinkUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${item.idDrink}`

useEffect(()=>{
    fetch(drinkUrl)
    .then(result => result.json())
    .then(json => setDrinkChoice(json.drinks[0]))
},[drinkUrl])


    return(
        <Container>
            <Paragraf>Hello from detail</Paragraf>
    {drinkChoice && 
    <View>
    <Paragraf>{drinkChoice.strDrink}</Paragraf>
    <Image
    source = {{uri:drinkChoice.strDrinkThumb}} style = {{width: 350, height: 350}}
    />
    <Paragraf>{drinkChoice.strInstructions}</Paragraf>
    </View>}
        </Container>
    )
}
export default DrinkDetail