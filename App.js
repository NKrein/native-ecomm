import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants"
import { useState } from 'react';
import { PALETTE } from './utils/colorPalette';
import { useFonts } from 'expo-font';
import { fonts } from './utils/fonts';
import Home from './sceens/Home';

export default function App() {
  const [selectedItem, setSelectedItem] = useState({});
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.main}>
        <Home />
        <Text>App by nkrein</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PALETTE.white,
  },
  main: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'playRegular',
    fontSize: 32
  }
});
