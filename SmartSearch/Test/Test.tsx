import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as tf from '@tensorflow/tfjs';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Dimensions, LogBox, Platform, StyleSheet, View, Image } from 'react-native';
import Canvas from 'react-native-canvas';

LogBox.ignoreAllLogs(true);

const { width, height } = Dimensions.get('window');

export default function Patp() {
  const [model, setModel] = useState<cocoSsd.ObjectDetection>();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imageTensor, setImageTensor] = useState<tf.Tensor3D | null>(null);
  let context = useRef<CanvasRenderingContext2D>();
  const canvas = useRef<Canvas>();

  useEffect(() => {
    (async () => {
      await tf.ready();
      setModel(await cocoSsd.load());
    })();
  }, []);

  const handleImageUpload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      const imageTensor = await uriToTensor(result.assets[0].uri);
      setImageTensor(imageTensor);
      if (model) {
        const predictions = await model.detect(imageTensor);
        drawRectangle(predictions, imageTensor);
      }
    }
  };

  const uriToTensor = async (uri: string) => {
    const response = await fetch(uri);
    const imageData = await response.blob();
    const imageElement = document.createElement('img');
    imageElement.src = URL.createObjectURL(imageData);

    return new Promise<tf.Tensor3D>((resolve) => {
      imageElement.onload = () => {
        const imageTensor = tf.browser.fromPixels(imageElement);
        resolve(imageTensor);
      };
    });
  };

  const drawRectangle = (predictions: cocoSsd.DetectedObject[], nextImageTensor: any) => {
    if (!context.current || !canvas.current) {
      console.log('no context or canvas');
      return;
    }

    console.log(predictions);

    const scaleWidth = width / nextImageTensor.shape[1];
    const scaleHeight = height / nextImageTensor.shape[0];

    context.current.clearRect(0, 0, width, height);

    for (const prediction of predictions) {
      const [x, y, w, h] = prediction.bbox;
      const boundingBoxX = x * scaleWidth;
      const boundingBoxY = y * scaleHeight;

      context.current.strokeRect(boundingBoxX, boundingBoxY, w * scaleWidth, h * scaleHeight);
      context.current.fillText(prediction.class, boundingBoxX - 5, boundingBoxY - 5);
    }
  };

  const handleCanvas = async (can: Canvas) => {
    if (can) {
      can.width = width;
      can.height = height;
      const ctx: CanvasRenderingContext2D = can.getContext('2d') as any;
      context.current = ctx;
      ctx.strokeStyle = 'red';
      ctx.fillStyle = 'red';
      ctx.lineWidth = 3;
      canvas.current = can;
    }
  };
 const handleme =()=>{
alert("Hello i am here")

  }

  return (
    <View style={styles.container}>
      <Button title="Upload Image" onPress={handleImageUpload} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <Canvas style={styles.canvas} ref={handleCanvas} />
      <Button onPress={handleme} title='click me'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height / 2,
    resizeMode: 'contain',
  },
  canvas: {
    position: 'absolute',
    zIndex: 1000000,
    width: '100%',
    height: '100%',
  },
});
