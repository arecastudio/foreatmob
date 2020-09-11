import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const HomeScreen=({navigation})=>{
    return(
      <View style={styles.screen}>

        <View style={styles.topbar}>
            <View style={{flex:.8,justifyContent:'center'}}>
                <Text>Jl. Pluit Muara Angke No. 12</Text>
            </View>
            <View style={{flex:.2,alignItems:'center',justifyContent:'center'}}>
                <Icon size={24} color="red" name="map-marker-alt" />
            </View>
        </View>

        <View style={{paddingTop:15,}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Hello, John</Text>
            <Text style={{}}>What do you want to eat?</Text>
        </View>

        <View>
            <TouchableOpacity>
                <Text>Click Here</Text>
            </TouchableOpacity>
        </View>
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    screen:{
      //flex:1,
      //alignItems:'center',
      //justifyContent:'center',
      padding:15,
    },
    topbar:{
        //flex:1,
        flexDirection:'row',
    },
  });

  export default HomeScreen;