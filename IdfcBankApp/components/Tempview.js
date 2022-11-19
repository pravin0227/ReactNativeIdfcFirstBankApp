import { StatusBar } from "expo-status-bar";
import React, {  useRef, useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import Checkbox from "expo-checkbox";
import axios from "axios";
import { NativeScreenNavigationContainer } from "react-native-screens";
import Deposithistory from "../Deposithistory";


const Transactions = ({route, navigation}) => {

   
    
    const {accountno} = route.params;
    
    
    
    const deposit=()=>{
        navigation.navigate("")
    }
  const withdraw =()=>{

  }



    return (
    
        <View style={{flex:1,backgroundColor:'#fff'}}>
           
            
           <View style={{backgroundColor:'#ded1d1',flex:0.4,borderBottomEndRadius:50,borderBottomStartRadius:50,paddingTop:50}}>
            <Image style={styles.image} source={require("../assets2/download.png")} />
            <View style={{justifyContent:'center',alignItems:'center'}}>
            
            <Text style={{fontWeight:'bold', fontSize:45, margin:49}}>Transaction History</Text>
            </View>
            <View >
            <Text style={{fontWeight:'bold', fontSize:30, margin:12}}>Trasaction types</Text>
           
            <View style={{backgroundColor:'#fff',alignItems:'center',top:10}}>
            
        <TouchableOpacity style={styles.loginBtn} onPress={deposit}>
                <Text style={{color:'white',fontWeight:'bold', fontSize:18, margin:2}}>Deposits</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} >
              {/* //onPress={transfer} */}
                <Text style={{color:'white',fontWeight:'bold', fontSize:18, margin:2}}>Transfers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={withdraw}>
                <Text style={{color:'white',fontWeight:'bold', fontSize:18, margin:2}}>Withdraws</Text>
            </TouchableOpacity>
            
            <Image style={styles.image1} source={require("../assets2/paymentlogo1.png")} />

    

            </View>  
            </View>
                
    
                
    
            </View>
            
    
        </View>
    
      )
    }
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#de6262",
          alignItems: "center",
          justifyContent: "center",
        },
        container1: {
          flex: 1,
          backgroundColor: "#de6262",
          
          justifyContent: "center",
        },
       
        image: {
          marginTop:20,
          resizeMode:'cover',
          height:70,
          width:200,
          
          marginBottom:10
    
        },
       
        inputView: {
            backgroundColor: "#fff",
            borderRadius: 10,
            width: "70%",
            height: 45,
            marginBottom: 10,
            marginTop:10,
            textAlign:'center',
            alignItems: "center",
            borderWidth:2
        },
       
        TextInput: {
          height: 50,
          flex: 1,
          padding: 10,
          
        },
       
        forgot_button: {
          height: 30,
          marginBottom: 30,
        },
        image1: {
          marginTop:20,
          resizeMode:'cover',
          height:240,
          width:400,
          
          marginBottom:10
    
        },
       
        loginBtn: {
            width: "60%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            backgroundColor: "#9c343c",
        },
        checkboxcontainer:{
          marginBottom: 100,
          color: 'red',
        },
      });

export default Transactions;