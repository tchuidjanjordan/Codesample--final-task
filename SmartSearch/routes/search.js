// src/WalletFound.js
import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
import me from "../assets/phone4.png"
const WalletFound = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Result from your search</Text>
      <Text style={styles.title}>wallet found !!! 🐸🐸</Text>
      <Image
        source={me}
        style={styles.image}
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>object description</Text>
        <Text style={styles.descriptionText}>location: Yaounde</Text>
        <Text style={styles.descriptionText}>color: brown</Text>
        <Text style={styles.descriptionText}>size: 10cm</Text>
        <Text style={styles.descriptionText}>items inside: ID card (steffan), 100FCFA, some scrap papers, driving licenses</Text>
      </View>
      <View style={styles.founderContainer}>
        <Text style={styles.founderTitle}>Founder details</Text>
        <Text style={styles.founderText}>name: Zack Bioffe</Text>
        <Text style={styles.founderText}>contact: 684523495</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={() => {}} />
        <Button title="Clear" onPress={() => {}} />
        <Button title="See more results" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  descriptionContainer: {
    width: '100%',
    padding: 15,
    backgroundColor: '#dff0d8',
    borderRadius: 10,
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    marginBottom: 5,
  },
  founderContainer: {
    width: '100%',
    padding: 15,
    backgroundColor: '#dff0d8',
    borderRadius: 10,
    marginBottom: 20,
  },
  founderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  founderText: {
    fontSize: 14,
    marginBottom: 5,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default WalletFound;
