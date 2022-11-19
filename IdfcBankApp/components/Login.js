import { StatusBar } from "expo-status-bar";
import React, {  useRef, useState } from "react";
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
import Deposithistory from "../Deposithistory";


export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [accountno, setaccountno] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false);
    const [Chkemail, setChkemail] = useState("");
    const [Chkpassword, setChkpassword] = useState("");
    let checking=false;
    const userRef=useRef();

    
   
  const getbycheck=()=>{
    if(accountno==="" || password==="" || email==="" ){
      Alert.alert("Provide all the fields");
    } else if(accountno.length!=6){
      Alert.alert("Accountno should be of six digits");
    }else{
      submitHandler();
    }
  }
    
    
    const submitHandler=()=>{
     axios.get(`http://192.168.43.81:8082/User/getbyaccountno/${accountno}`)
      .then((response)=>{
      //    
     
      if(accountno!=response.data.accountno){
          Alert.alert("Account does not exists");
      }
          
      else if(email==response.data.email && password==response.data.password && accountno==response.data.accountno){
        Alert.alert("login successful :)");
        navigation.navigate("Home",{accountno});
      }
      else{
        
        Alert.alert("Invalid email and password");
      }
      })      
      .catch((error)=>{
          console.log(error);
      })     
     
    }

   
    
    return (

      <View style={{flex:1,backgroundColor:'#fff'}}>

<View style={{backgroundColor:'#ded1d1',flex:0.3,borderBottomEndRadius:50,borderBottomStartRadius:50,paddingTop:50}}>
            <Image style={styles.image} source={require("../assets2/download.png")} />
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontWeight:'bold', fontSize:45, margin:49, paddingBottom:20}}>Login || User</Text>
            </View>
            <View >
            
           
            <View style={{backgroundColor:'#fff',alignItems:'center',top:10}}>
            <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Account number"
            placeholderTextColor="grey"
            keyboardType="number-pad"
            require
            value={accountno}
            onChangeText={(accountno) => setaccountno(accountno)}
          />
          
          
        </View>
            <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter email address"
            placeholderTextColor="grey"
            keyboardType="email-address"
            require
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
          
        </View>
        
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter your password"
            placeholderTextColor="grey"
            
            require
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
          
          
        </View>
        <TouchableOpacity style={styles.loginBtn}  onPress={getbycheck}>
                <Text style={{color:'white',fontWeight:'bold', fontSize:18, margin:2}}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginBottom:10}} onPress={()=>navigation.navigate("Resetpass")} >
                <Text style={{color:'black', fontSize:15, margin:2}}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>navigation.navigate("Signup")} >
                <Text style={{color:'black', fontSize:15, margin:2}}>Signup</Text>
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
      marginBottom: 40,
      resizeMode:'cover',
      height:70,
      width:200,
      
      marginBottom:10

    },
    image1: {
      marginTop:20,
      resizeMode:'cover',
      height:240,
      width:400,
      
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
      
      borderWidth:2,
      width:250,
      borderRadius:30
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      width: "40%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      backgroundColor: "#9b1c29",
      marginBottom:20
    },
    checkboxcontainer:{
      marginBottom: 100,
      color: 'red',
    },
  });