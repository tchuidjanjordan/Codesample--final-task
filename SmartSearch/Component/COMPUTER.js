import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Computer = ({ imageUrl, name, description }) => {
  return (
    <View style={styles.container}>
      <Image source={ imageUrl } style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Computer;
