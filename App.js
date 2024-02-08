import { KeyboardAvoidingView, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants"
import { useState } from 'react';
import { PALETTE } from './utils/colorPalette';
import { useFonts } from 'expo-font';
import { fonts } from './utils/fonts';
import Home from './sceens/Home';
import ItemListCategories from './sceens/ItemListCategories';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState({});
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  const handleBack = () => setSelectedCategory({})

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.main}>
          {selectedCategory.id
            ? <ItemListCategories category={selectedCategory} handleBack={handleBack} />
            : <Home handleCategorySelect={setSelectedCategory} />
          }
          <Text>App by nkrein</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
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
