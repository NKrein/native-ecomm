import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet } from 'react-native';
import Constants from "expo-constants"
import { PALETTE } from './utils/colorPalette';
import { useFonts } from 'expo-font';
import { fonts } from './utils/fonts';
import Navigator from './navigation/Navigator';

export default function App() {

  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Navigator />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    backgroundColor: PALETTE.white
},
});
