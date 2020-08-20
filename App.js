import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import logo from './assets/logomedium.png';
import Navigator from './Routes/HomeStack';

export default function App() {
  const [firstname, setFirstname]= useState('ken');
  const [lastname, setLastname]= useState('ryu');
  const [mail, setMail]= useState('elena@sf.com');
  const [psswrd, setPsswrd]= useState('haduken');
  
  return (
    <View style={styles.container}>

    <Image source ={logo} style= {styles.logo}/>

      <Text style={styles.words}> First Name</Text>
      <TextInput 
      style={styles.input}
      onChangeText={(val) => setFirstname(val)}/>
      <StatusBar style="auto" />

      <Text style={styles.words}> Last Name</Text>
      <TextInput 
      style={styles.input}
      onChangeText={(val) => setLastname(val)}/>
      <StatusBar style="auto" />

      <Text style={styles.words}> Email</Text>
      <TextInput 
      style={styles.input}
      onChangeText={(val) => setMail(val)}/>
      <StatusBar style="auto" />

      <Text style={styles.words}> Password</Text>
      <TextInput 
      style={styles.input}
      onChangeText={(val) => setPsswrd(val)}/>
      <StatusBar style="auto" />

      <TouchableOpacity
      onPress={() => alert('Test')}
      style= {styles.button}>
      <Text style= {styles.buttonText}> Last Step </Text>
      </TouchableOpacity>

      <Text style={styles.words}>First Name: {firstname}{"\n"}
            Last Name:  {lastname}{"\n"}
            E-mail:     {mail}{"\n"}
            Psswrd:     {psswrd}</Text>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    height: 50,
    width: 345,
  },

  logo: {
    width: 217,
    height: 46,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 60,
    
  },
  words: {
  	color: '#f2f2f2'
  },
  button: {
    alignSelf: 'center',
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 20,
    marginTop: 50,
    width: 200,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#f2f2f2'
  },
});
