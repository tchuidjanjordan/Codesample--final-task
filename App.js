
import React from "react";
import { StyleSheet, Text, View,Animated, Dimensions } from "react-native";
import LoadingScreen from "./Dora_plate/components/TEST/Loading";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionSpecs, CardStyleInterpolators  } from '@react-navigation/stack';

import PageTransition from "./SmartSearch/controller/PageTransitionController";
import SmartSearch from "./SmartSearch/routes/searchpage";
import Patp from "./SmartSearch/Test/Test";
import WalletFound from "./SmartSearch/routes/search";
import NAApp from "./SmartSearch/Test/Filejam copy";
import MaApp from "./SmartSearch/controller/matchcontroller";




const Stack = createStackNavigator();
export default function App() {
  return (
<PageTransition/>
  );
}

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
