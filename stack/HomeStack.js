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

const HomeStack=({navigation})=>{
    return(
      <ScrollView style={styles.screen} horizontal={false}>

        {/*Alamat dan notifikasi*/}
        <View style={styles.topbar}>
            <View style={{flex:.8,justifyContent:'center'}}>
                <Text>Jl. Pluit Muara Angke No. 12</Text>
            </View>
            <TouchableOpacity style={{flex:.2,alignItems:'center',justifyContent:'center'}}>
                <Icon size={24} color="red" name="bell" />
            </TouchableOpacity>
        </View>

        {/*Greetings*/}
        <View style={{paddingTop:15,}}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#3E4462'}}>Hello, Rosie</Text>
            <Text style={{}}>What do you want to eat?</Text>
        </View>

        {/*Random kategori*/}
        <View style={{paddingTop:15,flexDirection:'row',justifyContent:'space-between'}}>
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
            <TouchableOpacity 
                style={{flex:.2,alignItems:'center',justifyContent:'center'}}
                onPress={()=>navigation.navigate('Promo')}
            >
                <Text style={{color:'red'}}>See all</Text>
            </TouchableOpacity>
        </View>

        {/*Promo hari ini*/}
        <ScrollView style={{flexDirection:'row',paddingTop:10,backgroundColor:'#fadedf'}} horizontal={true}>
            {/*Promo item*/}
            <TouchableOpacity style={{marginHorizontal:10}}>
                <ImageBackground
                    style={{width:300,height:300,borderRadius:10,}}
                    source={FoodPicture}
                >
                    <TouchableOpacity style={{padding:2,margin:5,backgroundColor:'white',borderRadius:50,alignSelf:'flex-end'}}>
                        <Icon size={20} color="red" name="heart" />
                    </TouchableOpacity>

                    <View style={{flex:1,flexDirection:'column-reverse'}}>
                        <View style={{backgroundColor:'white', margin:15,borderRadius:10,padding:10}}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Salad Fruid</Text>
                        <Text style={{color:'#777777'}}>Delicious salad fruit</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{flex:0.7,color:'blue',fontWeight:'bold'}}>Rp. 25,0000</Text>
                            <View style={{flex:0.3,backgroundColor:'#eda345',alignItems:'center',borderRadius:10}}>
                                <Text style={{color:'white'}}>5 left</Text>
                            </View>
                        </View>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={{marginHorizontal:10}}>
                <ImageBackground
                    style={{width:300,height:300,borderRadius:10,}}
                    source={FoodPicture}
                >
                    <TouchableOpacity style={{padding:2,margin:5,backgroundColor:'white',borderRadius:50,alignSelf:'flex-end'}}>
                        <Icon size={20} color="red" name="heart" />
                    </TouchableOpacity>

                    <View style={{flex:1,flexDirection:'column-reverse'}}>
                        <View style={{backgroundColor:'white', margin:15,borderRadius:10,padding:10}}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Salad Fruid</Text>
                        <Text style={{color:'#777777'}}>Delicious salad fruit</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{flex:0.7,color:'blue',fontWeight:'bold'}}>Rp. 25,0000</Text>
                            <View style={{flex:0.3,backgroundColor:'#eda345',alignItems:'center',borderRadius:10}}>
                                <Text style={{color:'white'}}>5 left</Text>
                            </View>
                        </View>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={{marginHorizontal:10}}>
                <ImageBackground
                    style={{width:300,height:300,borderRadius:10,}}
                    source={FoodPicture}
                >
                    <TouchableOpacity style={{padding:2,margin:5,backgroundColor:'white',borderRadius:50,alignSelf:'flex-end'}}>
                        <Icon size={20} color="red" name="heart" />
                    </TouchableOpacity>

                    <View style={{flex:1,flexDirection:'column-reverse'}}>
                        <View style={{backgroundColor:'white', margin:15,borderRadius:10,padding:10}}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Salad Fruid</Text>
                        <Text style={{color:'#777777'}}>Delicious salad fruit</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{flex:0.7,color:'blue',fontWeight:'bold'}}>Rp. 25,0000</Text>
                            <View style={{flex:0.3,backgroundColor:'#eda345',alignItems:'center',borderRadius:10}}>
                                <Text style={{color:'white'}}>5 left</Text>
                            </View>
                        </View>
                        </View>
                    </View>
                </ImageBackground>    
            </TouchableOpacity>


        </ScrollView>
        
      </ScrollView>
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
        minWidth:60
    }
  });

  export default HomeStack;