import React from 'react';
import { View, Image } from "react-native"


export const ImageBox = () => {

    return (
        <View>
            <Image style= {{width: 300, height: 300}} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} />
        </View>
    )
}