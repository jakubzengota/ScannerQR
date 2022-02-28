import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { globalStyles } from '../styles/global';
import themeContext from '../config/themeContext';

export default function About() {

  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);

  return (
    <SafeAreaView style={[{flex: 1}, {backgroundColor: theme.background}]}>
      <Text style={[styles.textUserName, {color: theme.color }]}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textUserName: {
    fontSize: 20,
    textAlign: 'center',
    margin: 40,
    fontWeight: "bold",
  },
});