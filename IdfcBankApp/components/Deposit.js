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


const Deposit = ({route, navigation}) => {
    
    const [acccount2, setacccount2] = useState("");
    const [amount, setamount] = useState("");
    const {accountno} = route.params;
    
   const checkamount=()=>{
    if(amount===""){
      Alert.alert("please provide amount")
    }else{
      depoamount();
    }
   }

    const submitHandler=()=>{
        axios.get("http://192.168.43.81:8082/User/getbyaccountno/"+accountno)
        .then((response)=>{
        // 
        setacccount2(response.data.accountno);
        
        
        })      
        .catch((error)=>{
            console.log(error);
        })
          
         }
    
    const depoamount=()=>{
        
        axios.get("http://192.168.43.81:8082/transaction/deposit/"+amount+"/"+accountno)
         .then((response)=>{
         //
         Alert.alert(response.data); 
         
         
         })      
         .catch((error)=>{
             console.log(error);
         })     
        
       }



    return (
    
        <View style={{flex:1,backgroundColor:'#fff',justifyContent:'flex-end'}}>
           
            
            <View style={{backgroundColor:'#ded1d1',flex:0.45,borderBottomEndRadius:50,borderBottomStartRadius:50,paddingTop:50}}>
            <Image style={styles.image} source={require("../assets2/download.png")} />
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontWeight:'bold', fontSize:45, margin:49}}>Deposit</Text>
            </View>
                
    
                
    
            </View>
            <View style={{flex:1}}>
            <Text style={{fontWeight:'bold', fontSize:30, margin:12}}>Secure Payment</Text>
           
            <View style={{backgroundColor:'#fff',alignItems:'center',top:10}}>
    
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter amount to be deposit"
            placeholderTextColor="#003f5c"
            keyboardType="number-pad"
            require
            value={amount}
            onChangeText={(amount) => setamount(amount)}
          />
        </View>
    
            <TouchableOpacity style={styles.loginBtn} onPress={checkamount}>
                <Text style={{color:'white',fontWeight:'bold', fontSize:18, margin:2}}>Confirm</Text>
            </TouchableOpacity>
            
            <Image style={styles.image1} source={require("../assets2/paymentlogo1.png")} />
    
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
          marginBottom: 30,
          marginTop:30,
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
          width: "50%",
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

export default Deposit;