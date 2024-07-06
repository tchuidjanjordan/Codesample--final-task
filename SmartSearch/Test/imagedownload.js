import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import axios from 'axios';

export default function JApp() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImage = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://db-hosting-sql-resq.vercel.app/api/v1/disaster/list');
      setImage(response.data[0]);
        console.log(image.Imageurl)
} catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Load Image" onPress={fetchImage} />
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      {image && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: image.Imageurl }}
            style={styles.image}
          />
          <Text>{image.Name}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
});
