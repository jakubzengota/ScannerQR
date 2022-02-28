import React, { useState, useContext } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, Button, Switch } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { EventRegister } from "react-native-event-listeners"
import themeContext from '../config/themeContext';
import {Image} from 'react-native'
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  const [inputText, setInputText] = useState('');
  const [qrValue, setQrValue] = useState();

const theme = useContext(themeContext);  
  const [mode, setMode] = useState(false);

  return (
    
      <SafeAreaView style={[{flex: 1}, {backgroundColor: theme.background}]}>
      <Image style={styles.image} source={require('../images/logoporta.png')} />
      <View style={[styles.upLogo, {color: theme.color}]}>
        <View style={{borderColor:'white',borderWidth: 15}}>
          
          <QRCode
            value={qrValue ? qrValue : 'NA'}
            size={250}
            color="black"
            backgroundColor="white"
            logoSize={30}
            logoMargin={2}
            logoBorderRadius={13}
            logoBackgroundColor="yellow"
          />
        </View>
      </View>
      <Text style={[styles.textUserName, {color: theme.color }]}>
          MATEUSZ ZABOROWSKI
        </Text>
      <View style={styles.container}>
        {/* <Text style={[styles.text, {color: theme.color }]}>
          Wpisz swoj login domenowy
        </Text> */}
        
        <TextInput
          style={styles.textInput}
          onChangeText={(inputText) => setInputText(inputText)}
          value={inputText}
        />
        <View style={{margin:5}}>
          <Button
            onPress={() => setQrValue('https://info.porta.com.pl/ewizytowka/vcard/'+ inputText + '.vcf')}
            title="Wygeneruj kod QR"
          />
        </View>

        <Switch 
          value={mode}
          onValueChange={(value) => {
          setMode(value);
          EventRegister.emit("changeTheme", value);
          }} />
          <Text style={[styles.textScanQR, {color: theme.color }]}>
          Zeskanuj kod QR
        </Text>
      </View>
      
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  containerQr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    height: null,
    flex: 0.5,
    width: null,
    marginLeft: 20,
    marginRight: 20,
    resizeMode: 'contain'
},
  upLogo:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
      padding: 30
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
    
  },
  textScanQR: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
    fontWeight: "bold",
  },
  textUserName: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
    fontWeight: "bold",
  },
  textInput: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    margin: 10,
    borderWidth: 1,
  },
  button: {
      paddingTop: 20,
  },
});