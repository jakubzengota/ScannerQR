import React, { useEffect, useState } from 'react';
import Navigator from './routes/drawer';
import themeContext from './config/themeContext';
import theme from './config/theme';
import { EventRegister } from 'react-native-event-listeners';
import {NavigationContainer, DarkTheme, DefaultTheme} from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';


export default function App() {

  const [mode, setMode] = useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
      setMode(data);
      console.log(data);
    });

    return () => {
      EventRegister.removeEventListener(eventListener);
    }
  })

  return (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
    <NavigationContainer theme={mode === true ? DarkTheme : DefaultTheme}>
    {/* <StatusBar style="auto" /> */}
    <Navigator />
    
    </NavigationContainer>
    </themeContext.Provider>
  );
}
