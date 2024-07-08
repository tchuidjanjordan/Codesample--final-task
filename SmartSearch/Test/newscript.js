import React from 'react';
import { ScrollView, View } from 'react-native';
import Computer from '../Component/COMPUTER';
import Phone from '../Component/PHONE';
import IDCard from '../Component/IDCARD';
import  me from "../assets/phone4.png"
import  me1 from "../assets/phone1.png"
import  me2 from "../assets/phone3.png"

const DINFO = () => {
  const computers = Array.from({ length: 6 }).map((_, index) => (
    <Computer
      key={`computer-${index}`}
      imageUrl={me}
      name={`Computer ${index + 1}`}
      description={`Description for Computer ${index + 1}`}
    />
  ));

  const phones = Array.from({ length: 6 }).map((_, index) => (
    <Phone
      key={`phone-${index}`}
      imageUrl={me1}
      name={`Phone ${index + 1}`}
      description={`Description for Phone ${index + 1}`}
    />
  ));

  const idCards = Array.from({ length: 6 }).map((_, index) => (
    <IDCard
      key={`idcard-${index}`}
      imageUrl={me2}
      name={`ID Card ${index + 1}`}
      description={`Description for ID Card ${index + 1}`}
    />
  ));

  return (
    <ScrollView>
      <View>{computers}</View>
      <View>{phones}</View>
      <View>{idCards}</View>
    </ScrollView>
  );
};

export default DINFO;


