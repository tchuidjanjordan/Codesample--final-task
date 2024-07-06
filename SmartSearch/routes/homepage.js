import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.sidebar}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../assets/home.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../assets/cross.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../assets/time.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../assets/woman.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../assets/facebook.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../assets/whatsapp.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../assets/settings.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.title}>SMARTSEARCH</Text>
        <Text style={styles.subtitle}>HI <Text style={  {color:'#A5D6A7'}}>Messi</Text></Text>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
        <Text style={styles.welcomeText}>WELCOME ON SMARTSEARCH</Text>
        <Text style={styles.descriptionText}>we can search whatever you want here (missing items, discovery items)</Text>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/camera.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Take a photo to search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/cross.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText} onPress={() => navigation.navigate('search')} >Add a photo to search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/time.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>See what you search recently</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/woman.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Manage profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBF1',
  },
  sidebar: {
    width: 60,
    backgroundColor: '#A5D6A7',
    alignItems: 'center',
    paddingVertical: 2,

    position:"absolute"
  },
  iconButton: {
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  mainContent: {
marginTop:40,
justifyContent:"center",



  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    
  },
  profileImage: {
    width: 220,
    height: 220,
    borderRadius: 90,
    alignSelf: 'center',
  
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color:'#A5D6A7'
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    color:'#A5D6A7'

  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A5D6A7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
