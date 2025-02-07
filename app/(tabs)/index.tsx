import { Image, StyleSheet, Platform ,View,LogBox} from 'react-native';
import HomeScreen from "../../src/screens/HomeScreen"

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import RootNavigator from '@/src/navigators/RootNavigator';
import { Provider } from 'react-redux';
import store from "../../src/redux/store"

LogBox.ignoreAllLogs();








export default function app() {
  return (
    <Provider store={store}>
    <NavigationContainer   independent = {true}>
      <RootNavigator/>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  Container: {

   
  },

});
