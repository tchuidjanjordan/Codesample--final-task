
import React, { useState } from 'react';
import { Button, Image, View, TextInput, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default function CollectItem() {
  const [imageUri, setImageUri] = useState(null);
  const [InfoID, setInfoID] = useState('');
  const [Name, setName] = useState('');
  const [Status, setStatus] = useState('');
  const [Description, setDescription] = useState('');
  const [Type, setType] = useState('');

  const openImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access the camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.cancelled) {
      setImageUri(pickerResult.uri);
    }
  };

  const sendImage = async () => {

    

openImagePicker()
    if (!imageUri) {
      alert('Please select an image first');
      return;
    }

    const formData = new FormData();
    formData.append('picture', {
      uri: imageUri,
      name: 'photo.jpg',
      type: 'image/jpeg',
    });
    formData.append('InfoID', InfoID);
    formData.append('Name', Name);
    formData.append('Status', Status);
    formData.append('Description', Description);
    formData.append('Type', Type);

    try {
      const response = await axios.post('http://localhost:4520/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      alert('Image uploaded successfully');
    } catch (error) {
      console.error(error);
      alert('Image upload failed');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from gallery" onPress={openImagePicker} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <TextInput
        style={styles.input}
        placeholder="InfoID"
        value={InfoID}
        onChangeText={setInfoID}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={Name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Status"
        value={Status}
        onChangeText={setStatus}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={Description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Type"
        value={Type}
        onChangeText={setType}
      />
      <Button title="Send Image" onPress={sendImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    margin: 16,
  },
  input: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    borderRadius: 4,
  },
});

















function KApp() {
  const [imageUri, setImageUri] = useState(null);

  const openImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access the camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.cancelled) {
      setImageUri(pickerResult.uri);
    }
    alert("The image with:  Is been picked succefully")
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from gallery" onPress={openImagePicker} />
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
