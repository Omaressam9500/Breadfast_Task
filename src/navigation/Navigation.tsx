import React from "react";
import { Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { Colors, NavigationAnimations } from "../constants/styleConstants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "../constants/Screens";
import { I18nManager } from "react-native";
import { navigationRef } from "./NavigationHelper";
import { Splash } from "../screens/Splash";
import { PostsScreen } from "../screens/posts/PostsScreen";
import { PostDetails } from "../screens/postDetails/PostDetails";


const { isRTL } = I18nManager;

const Stack = createNativeStackNavigator();
const MainStacks = () => {
    return (
        <Stack.Navigator
            initialRouteName={Screens.SPLASH}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={Screens.SPLASH}
                component={Splash}
            />
            <Stack.Screen
                name={Screens.POSTS_SCREEN}
                component={PostsScreen}
            />
            <Stack.Screen
                name={Screens.POST_DETAILS}
                component={PostDetails}
            />



        </Stack.Navigator>
    );
};





const initNavigation = () => {
    return (
        <NavigationContainer
            ref={navigationRef}
        >
            <MainStacks />
        </NavigationContainer>
    );
};

export default initNavigation;
