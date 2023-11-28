import { StatusBar, SafeAreaView } from 'react-native';
import React, { JSX } from 'react';
import { styles } from './styles';

const ScreenContainer = ({
  children,
  style,
  isDarkStatusBar = true,
  statusBarBg,
}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={ statusBarBg ? statusBarBg : 'transparent' }
        barStyle={ isDarkStatusBar ? 'dark-content' : 'light-content' }
        animated
        showHideTransition="fade"
      />
      <SafeAreaView style={ [ styles.container, style ] }>{ children }</SafeAreaView>
    </>
  );
};

export default ScreenContainer;
