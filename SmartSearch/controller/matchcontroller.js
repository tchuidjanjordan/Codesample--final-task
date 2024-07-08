import React from 'react';
import { SafeAreaView, StyleSheet ,Text} from 'react-native';
import { WebView } from 'react-native-webview';

const MaApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={ require('../assets/match.html') }
        style={styles.webview}
      />
      <Text>Hi</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 7,
  },
  webview: {
    flex: 7,
  },
});

export default MaApp;
