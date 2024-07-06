import React, { useState } from 'react';
import { View, Button, Image, TextInput, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const MApp2 = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [status, setStatus] = useState(null);
  const [productName, setProductName] = useState('');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (!image || !productName) {
      setStatus("No image or product name provided");
      return;
    }

    const formData = new FormData();
    formData.append("photo", {
      uri: image,
      name: "photo.png",
      type: "image/png",
    });
    formData.append("product", productName);

    try {
      const response = await fetch('https://db-hosting-sql-resq.vercel.app/api/v1/posts/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("Image uploaded successfully");
      } else {
        setStatus("Image upload failed");
      }
    } catch (error) {
      console.error(error);
      setStatus("Image upload failed");
    }
  };

  const getImage = async () => {
    if (!productName) {
      setStatus("No product name provided");
      return;
    }

    try {
      const response = await fetch(`https://db-hosting-sql-resq.vercel.app/api/v1/posts/get/1`);

      if (response.ok) {
        const data = await response.json();
        setImageUrl(`data:image/jpeg;base64,${data.image}`);
        setStatus("Image retrieved successfully");
      } else {
        setStatus("Image retrieval failed");
      }
    } catch (error) {
      console.error(error);
      setStatus("Image retrieval failed");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter product name"
        value={productName}
        onChangeText={setProductName}
      />
      <Button title="Pick an image from camera roll" name="Photo" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Upload Image" name="Photo" onPress={uploadImage} />
      <Button title="Get Image" onPress={getImage} />
      {status && <Text>{status}</Text>}
      {imageUrl && (
        <View>
          <Text>Retrieved Image:</Text>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});

export default MApp2;
