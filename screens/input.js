import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { globalStyles } from '../styles/global';
import themeContext from '../config/themeContext';

export default function Input() {

  const theme = useContext(themeContext);


  return (
    <SafeAreaView style={[{flex: 1}, {backgroundColor: theme.background}]}>
      <Text style={[styles.textUserName, {color: theme.color }]}>
        Podaj login domenowy
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