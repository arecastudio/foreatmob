/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
//import Picker from '@react-native-community/picker';
//import { Icon } from 'react-native-elements';




import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Button } from 'native-base';
import HomeScreen from './screen/Home';

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon size={24} color="red" name="home" />
          ),
        }} />
        <Tab.Screen name="Shop" component={ShopScreen}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size }) => (
            <Icon size={24} color="red" name="shopping-cart" />
          ),
        }} />
        <Tab.Screen name="Search" component={SearchScreen}
        options={{
          tabBarLabel: 'Serch',
          tabBarIcon: ({ color, size }) => (
            <Icon size={24} color="red" name="search" />
          ),
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon size={24} color="red" name="user" />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const SearchScreen=({navigation})=>{
  return(
    <View style={styles.screen}>
      <Text>Search</Text>
    </View>
  );
}

const ShopScreen=({navigation})=>{
    return(
	<View style={styles.screen}>
	    <Text>Shop</Text>
	</View>
    );
}

const ProfileScreen=({navigation})=>{
    return(
	<View style={styles.screen}>
	    <Text>Profile</Text>
	</View>
    );
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    //padding:5,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
