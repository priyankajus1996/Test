/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen'
import MainApp from './src/navigation'
import NavigationService from './src/navigation/NavigationService';


const App: () => React$Node = () => {

  useEffect(() => {
    SplashScreen.hide();
  })

  return (
   
      <SafeAreaView style={styles.safeAreaView} forceInset={{ 'top': 'never' }}>
        <StatusBar backgroundColor="#17ada3" barStyle='light-content' />
        <View style={{ flex: 1, zIndex: 100 }}>
          {this.showToast()}
          <AppContainer
          ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)} />
        </View>
        <Footer />
      </SafeAreaView>
  ) 
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#119c93'
  }
});


export default App;
