import React, { useEffect, useState } from 'react';
import {View, FlatList} from 'react-native'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import Navigation from 'react-native-navigation';

import styled from "styled-components/native"
import {Container, Paragraf} from '../App'
import DrinkDetail from './DrinkDetail'


const DrinkList = ({ navigation }) => {
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
            <FlatList
          data={drinks}
          renderItem={({item}) =>
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })} >
          <Paragraf>{item.strDrink}</Paragraf>
          </TouchableOpacity>

          }
          keyExtractor={item => item.idDrink}
        />

        </Container>
    )
}
export default DrinkList
