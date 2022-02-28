import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Darkmode from '../screens/darkmode';

const screens = {
  Darkmode: {
    screen: Darkmode,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Dark Mode' navigation={navigation} />
      }
    },
  },
}

const DarkmodeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#fff', height: 60  },
  
  }
});

export default DarkmodeStack;