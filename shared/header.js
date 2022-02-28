import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import themeContext from '../config/themeContext';

export default function Header({ title, navigation }) {

  const openMenu = () => {
    navigation.openDrawer();
  }
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);

  return (
    <View style={[styles.header, {backgroundColor: theme.background}]}>
      <MaterialIcons name='menu' size={30} onPress={openMenu} style={[styles.icon, {color: theme.color }]} />
      <View>
        <Text style={[styles.headerText, {color: theme.color }]}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  }
});