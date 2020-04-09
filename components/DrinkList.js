import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from "styled-components/native"
import {Container, Paragraf} from '../App'
import DrinkDetail from './DrinkDetail'


const DrinkList = () => {
    const drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
const [drinks, setDrinks] = useState([])

    useEffect(()=>{
        fetch(drinkUrl)
        .then(result => result.json())
        .then(json => {
            console.log(json)
            setDrinks(json.drinks)})
    },[])
 


    return(
        <Container>
            <Paragraf>Hello world</Paragraf>
            {drinks && drinks.map((drink, index)=>{
                <TouchableOpacity
                key={drink.idDrink}
                onPress={() => navigation.navigate('Detail', { Detail })} // navigating to details screen with the clicked house info passed along
              >
                <Paragraf index={index}>{drink.strDrink}</Paragraf>
              </TouchableOpacity>
            })}
        </Container>
    )
}
export default DrinkList
