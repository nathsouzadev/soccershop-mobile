import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground } from 'react-native';
import ImgBg from '../../assets/bgSoccer.png';
import styles from '../../assets/styles.jsx';

const Layout = ({children}) => {

  return (
    <View style={styles.container}>
      <ImageBackground source={ImgBg} style={styles.backgroundImg}>
        {children}
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

export default Layout;
