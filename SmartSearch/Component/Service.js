import React, { useState, useEffect } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { setupDatabase, insertImage, getImages } from './db';

export default function Servic() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setupDatabase();
    loadImages();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0]);
    }
  };

  const uploadImage = async () => {
    if (selectedImage) {
      try {
        await insertImage('Example Image', selectedImage.uri);
        setSelectedImage(null);
        loadImages();
      } catch (error) {
        console.error('Error uploading image: ', error);
      }
    }
  };

  const loadImages = async () => {
    try {
      const storedImages = await getImages();
      setImages(storedImages);
    } catch (error) {
      console.error('Error loading images: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {selectedImage && (
        <>
          <Image source={{ uri: selectedImage.uri }} style={styles.image} />
          <Button title="Upload Image" onPress={uploadImage} />
        </>
      )}
      <ScrollView style={styles.scrollView}>
        {images.map((image) => (
          <View key={image.id} style={styles.imageContainer}>
            <Text>{image.name}</Text>
            <Image source={{ uri: image.uri }} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  scrollView: {
    marginTop: 20,
    width: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
});
