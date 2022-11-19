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
  ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";
import axios from "axios";
import { NativeScreenNavigationContainer } from "react-native-screens";
import Deposit from "./Deposit";
function Home({route,navigation}) {
  
    const [balance, setbalance] = useState("");
    const [name, setname] = useState("");
    const [account2, setaccount2] = useState("");
    const {accountno} = route.params;
    useEffect(() => {
       submitHandler();
      
    },[])
    const date=new Date().getDate();
    const day=new Date().getMonth()+1;
    const deposcreen=()=>{
      navigation.navigate("Deposit",{accountno});
    }

    const viewStatement=()=>{
      navigation.navigate("Transactions",{accountno});
    }
    const submitHandler=()=>{
      axios.get("http://192.168.43.81:8082/User/getbyaccountno/"+accountno)
      .then((response)=>{
      // 
      setbalance(response.data.balance);
      setname(response.data.name);
      
      })      
      .catch((error)=>{
          console.log(error);
      })
        
       }

  return (
    
    <View style={{flex:1,backgroundColor:'#fff'}}>
       
        
        <View style={{backgroundColor:'#ded1d1',flex:0.8,borderBottomEndRadius:50,borderBottomStartRadius:50,paddingTop:50}}>
        <Image style={styles.image} source={require("../assets2/download.png")} />
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30,fontWeight:'bold'}}> Welcome || {name}</Text>
        </View>
            <View style={{backgroundColor:'#fff',borderRadius:30,height:170, width:300, marginBottom:1,top:29,left:50}}>
            <Text style={{marginLeft:210,fontWeight:'bold',fontSize:19}}>{`${date}/${day}`}</Text>
            <Text style={{marginTop:70,marginLeft:50,fontWeight:'bold',fontSize:24}}>₹{balance}</Text>
            <Text style={{marginRight:100,marginLeft:50,fontWeight:'italic',fontSize:12}}>your balance</Text>
                
                
            </View>

            

        </View>
        <View style={{flex:1}}>
        <Text style={{fontWeight:'bold', fontSize:30, margin:12}}>What you want to do !?</Text>
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <ScrollView contentContainerStyle={{alignItems:'center'}} style={{backgroundColor:'#fff',top:10,width:400}}>
          
        <View style={{backgroundColor:'#fff',alignItems:'center'}}>
        
        
        <TouchableOpacity style={styles.loginBtn} onPress={submitHandler}>
            <Text style={{color:'white',fontWeight:'bold', fontSize:18, margin:2}}>View Balance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={deposcreen}>
            <Text style={{color:'white',fontWeight:'bold', fontSize:18, margin:2}}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Withdraw",{accountno})} >
            <Text style={{color:'white',fontWeight:'bold', fontSize:18, margin:2}}>Withdraw</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Transfer",{accountno})} >
            <Text style={{color:'white',fontWeight:'bold', fontSize:18, margin:2}}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginBtn,{marginBottom:100}]}onPress={viewStatement}>
            <Text style={{color:'white',fontWeight:'bold', fontSize:18, margin:2}}>View Statement</Text>
        </TouchableOpacity>
        
        

        </View>
        </ScrollView>
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
      
      resizeMode:'cover',
      height:70,
      width:200,
      
      marginBottom:10

    },
   
    inputView: {
      backgroundColor: "#fff",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      width: 300,
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#9c343c",
    },
    checkboxcontainer:{
      marginBottom: 100,
      color: 'red',
    },
  });

export default Home