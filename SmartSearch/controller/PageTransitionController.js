
import React from "react";
import { StyleSheet, Text, View,Animated, Dimensions } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionSpecs, CardStyleInterpolators  } from '@react-navigation/stack';
import Loadingpage from "../routes/loadingpage";
import HomeScreen from "../routes/homepage";
import LoginScreen from "../authentication/login";
import { Register } from "../authentication/register";
import SmartSearch from "../routes/searchpage";

export const Stack = createStackNavigator();
export default function PageTransition() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading"   screenOptions={{
          gestureEnabled: false,
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
          },
          cardStyleInterpolator: forFadeAndShrink,
        }}>
      <Stack.Screen name="Loading" component={Loadingpage} />
      <Stack.Screen name="Dashboard" component={HomeScreen} />
      <Stack.Screen name="Signup" component={Register} />
      <Stack.Screen name="Signin" component={LoginScreen} />
      <Stack.Screen name="search" component={SmartSearch} />
      
     
     
     
        

       
      </Stack.Navigator>
      
    </NavigationContainer>

  );
}
const forFadeAndShrink = ({ current, next, layouts }) => {
  return {
    cardStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
      transform: [
        {
          scale: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.8, 1],
          }),
        },
      ],
    },
  };
};


const forShrink = ({ current, next, layouts }) => {
  return {
    cardStyle: {
      opacity: current.progress,
      transform: [
        {
          scale: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [4, 1],
          }),
        },
      ],
    },
  };
};


// Custom card style interpolator for circular shrinking animation
const forCircularShrink = ({ current, layouts }) => {
  const { width, height } = Dimensions.get('window');
  const progress = Animated.multiply(current.progress, new Animated.Value(1));

  const opacity = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const transform = [
    {
      scale: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    },
  ];

  return {
    cardStyle: {
      opacity,
      transform,
      borderRadius: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [Math.max(width, height), 0],
      }),
      overflow: 'hidden',
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Robert:{
    color:"white",
    backgroundColor:"brown"
  }
});
