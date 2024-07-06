import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Bacgroundspecial } from '../authentication/register';

const SmartSearch = () => {
  const [selectedFile, setSelectedFile] = useState(null);


  
  const pickImage = async () => {
    // Ask the user for the permission to access the media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    // Open the image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedFile(result.assets[0]);
    }
  };



  const uploadImage = async () => {
    if (!selectedFile) {
      alert('Please select an image first');
      return;
    }

    const formData = new FormData();
    formData.append('photo', {
      uri: selectedFile.uri,
      name: selectedFile.uri.split('/').pop(),
      type: 'image/jpeg', // You might need to adjust the type based on the actual image type
    });

    try {/*
    await axios.post(
      "http://localhost:4520/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    ) */
      const response = await axios.post('http://localhost:4520/upload',
   
         formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },}
      );

      if (response.ok) {
        alert('Image uploaded successfully');
      } else {
        alert('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Bacgroundspecial />
        <Text style={styles.headerText}>Smart Search</Text>
        <Image source={require("../assets/profile.png")} style={styles.image} />
        <Text style={styles.greeting}>HI Messi</Text>
        <Text style={styles.welcomeText}>
          welcome on Smart Search
          {'\n'}
          we can search whatever you want here
          {'\n'}
          (missing items, discovery items)
        </Text>
        <View style={styles.checkboxContainer}>
          <Text style={styles.checkboxText}>Is the object lost?</Text>
        </View>
        <Text style={styles.uploadText}>Upload your image here</Text>
        <TouchableOpacity style={styles.dragDropContainer} onPress={pickImage}>
          <Text style={styles.dragDropText}>Drag&Drop files here</Text>
          <Text style={styles.orText}>or</Text>
          <Button title="Browse Files" onPress={pickImage} />
        </TouchableOpacity>
        <View style={styles.fileManagementContainer}>
          <Text style={styles.fileManagementText}>file management</Text>
          <Text style={styles.filesText}>Picture</Text>
          {selectedFile && (
            <Image source={{ uri: selectedFile.uri }} style={styles.uploadedImage} />
          )}
        </View>
        <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
          <Text style={styles.buttonText}>Upload to Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFBF1',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#FFFBF1',
  },
  uploadedImage: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  welcomeText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxText: {
    marginLeft: 10,
  },
  uploadText: {
    marginVertical: 10,
  },
  dragDropContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  dragDropText: {
    marginBottom: 10,
  },
  orText: {
    marginVertical: 5,
  },
  fileManagementContainer: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  fileManagementText: {
    fontWeight: 'bold',
  },
  filesText: {
    marginTop: 10,
  },
  uploadButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: '#ffffff',
  },
});

export default SmartSearch;
