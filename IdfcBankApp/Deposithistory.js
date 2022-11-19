import { View, Text } from 'react-native'
import React from 'react'

import {
    StyleSheet,

    Image,
    TextInput,
    Button,
    TouchableOpacity,
    Alert,
    ScrollView,
  } from "react-native";
  import Checkbox from "expo-checkbox";
  import axios from "axios";

const Deposithistory = () => {
  return (
    <View style={{justifyContent:'center'}}>
    <View style={{alignContent:'left'}}>
    <Image style={styles.imagepay} source={require("./assets2/pay.png")} />
    <Text style={{fontSize:18,fontWeight:'bold'}}>Trasaction History</Text>
    
    </View>
      
      
    </View>
  )
}
const styles = StyleSheet.create({

    imagepay: {
        marginTop: 20,
        resizeMode: 'cover',
        height: 50,
        width: 50,
    
        marginBottom: 10
    
      }

})

export default Deposithistory