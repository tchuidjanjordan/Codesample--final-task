import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';



   const Bacgroundspecial = ()=>{
    return(

        <View style={styles.headerContainer}>
        <Svg height="200" width="200" viewBox="0 0 100 100" style={styles.backgroundCircles}>
          <Circle cx="25" cy="25" r="25" fill="#8ed69c" />
          <Circle cx="75" cy="75" r="25" fill="#8ed69c" />
        </Svg>
      </View>
    )
}
const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
       <Bacgroundspecial/>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Welcome Onboard!</Text>
          <Text style={styles.subtitle}>let’s help you meet up your tasks</Text>

          <TextInput style={styles.input} placeholder="Enter your full name" placeholderTextColor="#000" />
          <TextInput style={styles.input} placeholder="Enter your E-mail" placeholderTextColor="#000" keyboardType="email-address" />
          <TextInput style={styles.input} placeholder="Enter Password" placeholderTextColor="#000" secureTextEntry />
          <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#000" secureTextEntry />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <View style={styles.signInContainer}>
            <Text style={styles.signInText}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.signInLink}> Sign in</Text>
            </TouchableOpacity>
          </View> 
          
          <View style={styles.headerContainer}>
          <Svg height="200" width="200" viewBox="0 0 100 100" style={styles.backgroundCircles}>
            <Circle cx="25" cy="25" r="25" fill="#8ed69c" />
            <Circle cx="75" cy="75" r="25" fill="#8ed69c" />
          </Svg>
        </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f7f4',

    
    justifyContent:"center",
    marginTop:"30%"
  },
  scrollView: {
    padding: 16,
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  backgroundCircles: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 50,
    borderColor: '#8ed69c',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#ffffff',
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
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  signInText: {
    fontSize: 14,
  },
  signInLink: {
    fontSize: 14,
    color: '#33a953',
    fontWeight: 'bold',
  },
});

export { Register,Bacgroundspecial};
