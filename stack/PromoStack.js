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

const PromoStack=({navigation})=>{
    return(
        <View style={styles.screen}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{flex:.2,alignItems:'flex-start',justifyContent:'center'}}
                    onPress={()=>navigation.goBack()}
                >
                    <Icon size={24} color="red" name="chevron-left" />
                </TouchableOpacity>
                <View style={{flex:.8,justifyContent:'center'}}>
                    <Text style={{color:'red',fontWeight:'bold',fontSize:20}}>Today's Promo</Text>
                </View>
            </View>
        </View>
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

  export default PromoStack;