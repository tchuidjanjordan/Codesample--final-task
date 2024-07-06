import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SmartSearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SMARTSEARCH</Text>

      <View style={styles.header}>
        <Text style={styles.greeting}>Hi <Text style={{color:"#4CAF50"}}>Lionel Messi</Text></Text>
        <Image
          source={require("../assets/profile.png")} // replace with your image URL
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.subtitle}>WELCOME ON SMART SEARCH</Text>
      <Text style={styles.description}>
        we can search whatever you want here  (missing items, discovery items)
      </Text>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Object found</Text>
          <Text style={styles.tableHeader}>Time</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>wallet missing</Text>
          <Text style={styles.tableCell}>09:55pm</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent:"center",

  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color:"#4CAF50"
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  subtitle: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
    color:"#4CAF50"
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 60,
    fontWeight:"bold"
  
  },
  table: {
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 10,
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#4CAF50',
  },
  tableHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  tableCell: {
    fontSize: 16,
    color: '#fff',
  },
  button: {
    backgroundColor: '#11AF59',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SmartSearchScreen;
