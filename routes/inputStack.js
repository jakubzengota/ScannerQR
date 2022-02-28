import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Input from '../screens/input';

const screens = {
  Input: {
    screen: Input,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Użytkownik' navigation={navigation} />
      }
    },
  },
}

const InputStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#fff', height: 60 },
  }
});

export default InputStack;