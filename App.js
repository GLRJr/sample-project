import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Image, Button, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollVeiw } from 'react-native';
import logo from './assets/logomedium.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

{/*This initializes user inputs*/}
function HomeScreen({ navigation}) {
  const [firstname, setFirstname]= useState('ken');
  const [lastname, setLastname]= useState('ryu');
  const [mail, setMail]= useState('elena@sf.com');
  const [psswrd, setPsswrd]= useState('haduken')
  return (
    
    <View style={styles.container}>

    {/*This is the logo*/}
    <Image source ={logo} style= {styles.logo}/>

      {/*These are the text input boxes*/}
      <Text style={styles.words}> First Name</Text>
      <TextInput 
      style={styles.input}
      onChangeText={(val) => setFirstname(val)}/>
      

      <Text style={styles.words}> Last Name</Text>
      <TextInput 
      style={styles.input}
      onChangeText={(val) => setLastname(val)}/>

      <Text style={styles.words}> Email</Text>
      <TextInput 
      style={styles.input}
      onChangeText={(val) => setMail(val)}/>

      <Text style={styles.words}> Password</Text>
      <TextInput 
      style={styles.input}
      onChangeText={(val) => setPsswrd(val)}/>

      {/*This is the button thats takes you to the second page*/}
      <TouchableOpacity
      onPress={() => navigation.navigate('Details')}
      style= {styles.button}>
      <Text style= {styles.buttonText}> Last Step </Text>
      </TouchableOpacity>
      

       {/*I put this here to verify user input is being stored, This will eventually be passed onto another screen*/}
      <Text style={styles.Dwords}>First Name: {firstname}{"\n"}
            Last Name:  {lastname}{"\n"}
            E-mail:     {mail}{"\n"}
            Psswrd:     {psswrd}</Text>
    </View>
  );
}
{/*This is the second screen*/}
function DetailsScreen() {
  const [firstname, setFirstname]= useState('ken');
  const [lastname, setLastname]= useState('ryu');
  const [mail, setMail]= useState('elena@sf.com');
  const [psswrd, setPsswrd]= useState('haduken') 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style={styles.Dwords}>First Name: {firstname}{"\n"}
            Last Name:  {lastname}{"\n"}
            E-mail:     {mail}{"\n"}
            Psswrd:     {psswrd}</Text>
    </View>

  );
}
{/*This is the navigator*/}
const Stack = createStackNavigator();

 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name ="Home" 
        component={HomeScreen}
        options={{ title: 'Overview'}}/> 

        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
{/*This is page styling or "CSS"*/}
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
  Dwords: {
  	color: '#7FFFD4'
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
export default App;
