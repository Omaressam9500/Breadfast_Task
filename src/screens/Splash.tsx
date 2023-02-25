import React, { FC,  useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { Colors, ColorWithOpacity, Fonts, Pixel } from "../constants/styleConstants";
import { useNavigation } from "@react-navigation/core";
import { Screens } from "../constants/Screens";




export const Splash: FC = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace(Screens.POSTS_SCREEN)
        }, 2000);
    });


    return (
        <View style={styles.mainView}>
              <Image style={styles.logoBK} source={require('../assets/icons/logo.jpg')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: Colors.mainColor,
  
    },
 
    logoBK: {
        backgroundColor: Colors.white,
        width: Pixel(300),
        alignSelf: 'center',
        marginTop: Pixel(200),
        height: Pixel(300),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Pixel(150)
    },
  

});

