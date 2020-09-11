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
import Icon from 'react-native-vector-icons/FontAwesome5';
import FoodPicture from '../asset/food-picture.jpg';

const HomeScreen=({navigation})=>{
    return(
      <View style={styles.screen}>

        {/*Alamat dan notifikasi*/}
        <View style={styles.topbar}>
            <View style={{flex:.8,justifyContent:'center'}}>
                <Text>Jl. Pluit Muara Angke No. 12</Text>
            </View>
            <View style={{flex:.2,alignItems:'center',justifyContent:'center'}}>
                <Icon size={24} color="red" name="bell" />
            </View>
        </View>

        {/*Greetings*/}
        <View style={{paddingTop:15,}}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#3E4462'}}>Hello, John</Text>
            <Text style={{}}>What do you want to eat?</Text>
        </View>

        {/*Random kategori*/}
        <View style={{paddingTop:15,flexDirection:'row',justifyContent:'center'}}>
            <TouchableOpacity style={styles.catbank}>
                <View style={styles.category}>
                    <Icon size={24} color="red" name="heart" />
                    <Text style={{color:'#999999'}}>Favorite</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.catbank}>
                <View style={styles.category}>
                    <Icon size={24} color="red" name="tags" />
                    <Text style={{color:'#999999'}}>Cheap</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.catbank}>
                <View style={styles.category}>
                    <Icon size={24} color="red" name="poll" />
                    <Text style={{color:'#999999'}}>Trend</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.catbank}>
                <View style={styles.category}>
                    <Icon size={24} color="red" name="angle-double-right" />
                    <Text style={{color:'#999999'}}>More</Text>
                </View>
            </TouchableOpacity>
        </View>

        {/*Caption Promo hari ini*/}
        <View style={{flexDirection:'row',marginTop:15}}>
            <View style={{flex:.8,justifyContent:'center'}}>
                <Text style={{fontSize:15,fontWeight:'bold',color:'black'}}>Today's promo</Text>
            </View>
            <View style={{flex:.2,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'red'}}>See all</Text>
            </View>
        </View>

        {/*Promo hari ini*/}
        <View style={{flexDirection:'row',paddingTop:10}}>
            <ImageBackground
                style={{width:300,height:300,borderRadius:10,}}
                source={FoodPicture}
            >
                <TouchableOpacity style={{padding:2,margin:5,backgroundColor:'white',borderRadius:50,alignSelf:'flex-end'}}>
                    <Icon size={20} color="red" name="heart" />
                </TouchableOpacity>

                <View style={{flex:1,flexDirection:'column-reverse'}}>
                    <View style={{backgroundColor:'white', margin:15,borderRadius:10,padding:10}}>
                    <Text>Salad Fruid</Text>
                    <Text>Salad Fruid</Text>
                    <View>
                        <Text>Salad Fruid</Text>
                        <TouchableOpacity>
                            <Text>5 left</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>


            </ImageBackground>
            
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