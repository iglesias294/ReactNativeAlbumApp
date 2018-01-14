///import library to createa  component 
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/header';


//create a component 

const App = () => ( 
  <View>
    <Header headerText="Albums!" />
    
  </View>
  );

//render it to the device

AppRegistry.registerComponent('albums', () => App);

