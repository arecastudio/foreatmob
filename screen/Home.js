import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    ImageBackground,
    TouchableOpacity
  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from '../stack/HomeStack';
import PromoStack from '../stack/PromoStack';

const Stack = createStackNavigator();

const HomeScreen=({navigation})=>{
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
            }}
        >
            <Stack.Screen name="Home" component={HomeStack} />
            <Stack.Screen name="Promo" component={PromoStack} />
        </Stack.Navigator>
    );
  }

  const styles = StyleSheet.create({
    screen:{
      //flex:1,
      //alignItems:'center',
      //justifyContent:'center',
      paddingHorizontal:15,
      paddingTop:15,
      backgroundColor:'#F8F5F2'
    },
  });

  export default HomeScreen;