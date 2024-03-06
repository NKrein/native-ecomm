import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Constants from "expo-constants"
import { PALETTE } from './utils/colorPalette';
import { useFonts } from 'expo-font';
import { fonts } from './utils/fonts';
import { Provider } from 'react-redux';
import store from './store';
import MainNavigator from './navigation/MainNavigator';

export default function App() {

  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <MainNavigator />
        </Provider>
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
