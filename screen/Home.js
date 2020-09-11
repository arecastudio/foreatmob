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
            <Text style={{fontSize:20,fontWeight:'bold',color:'#3E4462'}}>Hello, John</Text>
            <Text style={{}}>What do you want to eat?</Text>
        </View>

        <View style={{paddingTop:15,flexDirection:'row',justifyContent:'center'}}>
            <TouchableOpacity style={styles.catbank}>
                <View style={styles.category}>
                    <Icon size={24} color="red" name="heart" />
                    <Text>Favofite</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.catbank}>
                <View style={styles.category}>
                    <Icon size={24} color="red" name="tags" />
                    <Text>Cheap</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.catbank}>
                <View style={styles.category}>
                    <Icon size={24} color="red" name="poll" />
                    <Text>Trend</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.catbank}>
                <View style={styles.category}>
                    <Icon size={24} color="red" name="angle-double-right" />
                    <Text>More</Text>
                </View>
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
      backgroundColor:'#F8F5F2'
    },
    topbar:{
        //flex:1,
        flexDirection:'row',
    },
    catbank:{
        paddingHorizontal:5,
    },
    category:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
        borderRadius:10,
        padding:5,
        minWidth:80
    }
  });

  export default HomeScreen;