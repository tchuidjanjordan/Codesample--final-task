import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native';
import Svg, { Circle, Rect, Path } from 'react-native-svg';
import me from  "../assets/welcome.png"

const Loadingpage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Svg height="200" width="200" viewBox="0 0 100 100">
            <Circle cx="25" cy="25" r="25" fill="#8ed69c" />
            <Circle cx="75" cy="75" r="25" fill="#8ed69c" />
          </Svg>
          <Svg height="200" width="200" viewBox="0 0 100 100">
            <Circle cx="25" cy="25" r="25" fill="#8ed69c" />
            <Circle cx="75" cy="75" r="25" fill="#8ed69c" />
          </Svg>
        </View> 
          <Image source={me} style={styles.image}/>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Find your missing objects on Smart Search</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              This image search application allows users to search for images using the Unsplash API. When a user enters a query and clicks the search button, the application fetches images related to the query and displays them on the page. Users can also load more images by clicking the "Show more" button.
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('Signin')} >Get started</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f7f4',
  },
  scrollView: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
  },
  textContainer: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  descriptionContainer: {
    backgroundColor: '#8ed69c',
    padding: 16,
    borderRadius: 8,
  },
  description: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    borderWidth:1,
    borderRadius:18,
    animation: 'blink 1.5s infinite alternate ease-in-out',
    
  },

  '@keyframes blink': {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
    '50%': {
      opacity: 0,
    },
  },
  
  button: {
    backgroundColor: '#33a953',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  image:{
width:150,
height:150,
marginLeft:"30%"
  }
});

export default Loadingpage;
