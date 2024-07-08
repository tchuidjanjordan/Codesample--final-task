import React from 'react';
import { View, FlatList, Text, TouchableOpacity, ScrollView,Alert } from 'react-native';
import { Audio } from 'expo-av';
import Computer from '../Component/COMPUTER';
import Phone from '../Component/PHONE';
import IDCard from '../Component/IDCARD';
import  me from "../assets/phone4.png"
import  me1 from "../assets/phone1.png"
import  me2 from "../assets/phone3.png"
import me3 from  "../assets/phone4.png"
import me4 from  "../assets/phone5.png"
import me5 from  "../assets/phone6.png"
import me6 from  "../assets/item.png"
import me7 from  "../assets/item1.png"
import me8 from  "../assets/item2.png"
import me9 from  "../assets/item3.png"
import me11 from  "../assets/item5.png"
import me12 from  "../assets/item5.png"
import me13 from  "../assets/item6.png"
import me14 from  "../assets/item7.png"
import me15 from  "../assets/item8.png"

const ItemList = ({ data }) => (
  <FlatList
    data={data}
    horizontal
    renderItem={({ item }) => (
      <View style={{ margin: 10 }}>
        <Text>{item}</Text>
      </View>
    )}
    keyExtractor={(item, index) => index.toString()}
  />
);

const notfound= "Item is been searched for";
const found="Item is saved in the system"



const computersData = [
  {
    id: 1,
    imageUrl: me1,
    name: found,
    description: 'Description for Item 1',
  },
  {
    id: 2,
    imageUrl: me2,
    name: notfound,
    description:me3,
  },
  {
    id: 3,
    imageUrl: me1,
    name: notfound,
    description: 'Description for Item 3',
  },
  {
    id: 5,
    imageUrl: me4,
    name:found,
    description: 'Description for Item 4',
  },
  {
    id: 6,
    imageUrl: me5,
    name:found,
    description: 'Description for Item 4',
  },
  {
    id: 7,
    imageUrl: me6,
    name:found,
    description: 'Description for Item 4',
  },
  {
    id: 8,
    imageUrl: me7,
    name:notfound,
    description: 'Description for Item 4',
  },
  {
    id:9,
    imageUrl: me8,
    name:notfound,
    description: 'Description for Item 4',
  },
  {
    id: 10,
    imageUrl: me9,
    name: notfound,
    description: 'Description for Item 4',
  },
  {
    id: 11,
    imageUrl: me14,
    name:found,
    description: 'Description for Item 4',
  },
  {
    id: 12,
    imageUrl: me11,
    name:found,
    description: 'Description for Item 4',
  },  {
    id: 13,
    imageUrl: me12,
    name: found,
    description: 'Description for Item 4',
  },

  {
    id: 14,
    imageUrl: me13,
    name:notfound,
    description: 'Description for Item 4',
  },
  {
    id: 15,
    imageUrl: me14,
    name:found,
    description: 'Description for Item 4',
  },
  {
    id: 16,
    imageUrl: me15,
    name:notfound,
    description: 'Description for Item 4',
  },
];


const Finditem = () => {


  const computers = computersData.map((computer) => (
    <Computer
      key={`computer-${computer.id}`}
      imageUrl={computer.imageUrl}
      name={computer.name}
      description={computer.description}
    />
  ));

  
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/sound.wav') // make sure to have a sound file in the specified path
    );
    await sound.playAsync();
  };

  return (
    <ScrollView>
      <ItemList data={computers} />
      <ItemList data={computers} />
      <View style={{ margin: 20 }}>
        <TouchableOpacity onPress={playSound} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Play Sound</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Finditem;
