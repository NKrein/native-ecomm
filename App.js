import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Constants from "expo-constants"
import { PALETTE } from './src/utils/colorPalette';
import { useFonts } from 'expo-font';
import { fonts } from './src/utils/fonts';
import { Provider } from 'react-redux';
import store from './src/store';
import MainNavigator from './src/navigation/MainNavigator';
import ToastManager from 'toastify-react-native';
import { init } from './src/db';

init()
  .catch((err) => console.log('Error ->', err))

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
          <ToastManager
            style={styles.toast}
            textStyle={styles.toastText}
            position='top'
            height='auto'
            width='100%' />
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
  toast: {
    backgroundColor: PALETTE.white,
    paddingHorizontal: 16,
  },
  toastText: {
    color: PALETTE.eerieBlack,
    paddingHorizontal: 12,
  }
});
