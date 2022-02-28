import { createStackNavigator } from 'react-navigation-stack';
import React, { useState, useContext } from 'react';
import Header from '../shared/header';
import themeContext from '../config/themeContext';
import Home from '../screens/home';
import { SafeAreaView, Text, View, StyleSheet, TextInput, Button, Switch } from 'react-native';



const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        // header: () => null,
        
        headerTitle: () => <Header title='PORTA QR' navigation={navigation} />
        
      }
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    
    headerStyle: { height: 60  }
    
  }
});

export default HomeStack;