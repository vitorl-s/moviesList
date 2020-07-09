import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Platform, NativeModules} from 'react-native';
import MoviesApp from './src/navigator/appNavigator';

const App = () => {
  useEffect(() => {
    handleLocale();
  });
  const handleLocale = async () => {
    const locale =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;
  };

  return <MoviesApp />;
};

export default App;
