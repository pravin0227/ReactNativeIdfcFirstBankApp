import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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


export default function Signup({navigation}) {
    const [accountno, setaccountno] = useState("");    
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [phoneno, setphoneno] = useState("");
    const [password, setpassword] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [pincode, setpincode] = useState("");
    const [balance, setbalance] = useState("");
    const [BranchId, setBranchId] = useState("");
    const [BranchName, setBranchName] = useState("");
    const [agree, setAgree] = useState(false); 

    const createuser=()=>{
      
      axios.post('http://192.168.43.81:8082/User/createUser',{
      accountno:accountno,
      name:name,
      phoneno:phoneno,
      accountno:accountno,
      city:city,
      state:state,
      pincode:pincode,
      email:email,
      password:password,
      balance:2000,
      

    })
    .then((response)=>{
      console.log(response.data);
      Alert.alert("user created");
      navigation.navigate("Login");
      

      
    })
    .catch((error)=>{
      console.log(error);
    })
  }

   
    
    const phoneregx=/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    const emailregex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const nameregex=/^[A-Za-z]+$/;
  //  const validate=()=>{
  //   if(email==="" || password==="" || phNumber ==="" || name===""){
  //     Alert.alert(`email is not valid`)
  //     //return true;
  //   }else if(name.test(nameregex)){
  //     Alert.alert(`name should contain only alphabets`);
  //   }
  //   else if(email.test(emailregex)){
  //     Alert.alert(`email is not valid`);
  //   }else if(phNumber.test(phoneregx)){
  //     Alert.alert(`please enter valid phone number`);
  //   }else if(password.length<=8){
  //     Alert.alert(`password should have at least 8 chars`);
  //   }else{
  //     Alert.alert(`account created successfully ${email}`);
  //     navigation.navigate("Login")
  //   }

  //  };
    
    return (
    
      <View style={[styles.container]}>
        <View style={styles.container} >
        <Image style={styles.image} source={require("../assets2/download2.jpg")} />
        </View>
        
          
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter your name"
            placeholderTextColor="#003f5c"
            value={name}
            onChangeText={(name) => setName(name)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter accont no"
            placeholderTextColor="#003f5c"
            value={accountno}
            onChangeText={(accountno) => setaccountno(accountno)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="enter your email id"
            placeholderTextColor="#003f5c"
            value={email}
            onChangeText={(email) => setemail(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter your phone number"
            keyboardType="number-pad"
            placeholderTextColor="#003f5c"
            value={phoneno}
            onChangeText={(phoneno) => setphoneno(phoneno)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="enter your city name"
            placeholderTextColor="#003f5c"
            value={city}
            onChangeText={(city) => setcity(city)}
            
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="enter your state name"
            placeholderTextColor="#003f5c"
            value={state}
            onChangeText={(state) => setstate(state)}
            
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="enter your pincode name"
            placeholderTextColor="#003f5c"
            value={pincode}
            onChangeText={(pincode) => setpincode(pincode)}
            
          />
        </View>
   
        <View style={styles.inputView}>
          { <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setpassword(password)}
          /> }
        </View>
        <View style={{display:'flex'}}>
        <Checkbox
        value={agree}
        onValueChange={()=>setAgree(!agree)}
        color={agree? "#4630EB" : undefined}
        />
        <Text style={{marginBottom:1}}>
          I Have read and agreed with the Tc
        </Text>
        </View>
   
        

        <TouchableOpacity style={[styles.loginBtn,{
          backgroundColor : agree? "#4630EB":"grey"
        }]}

        disabled={!agree}
        onPress={createuser}
        
        >
          <Text style={styles.loginText}>SignUp</Text>
        </TouchableOpacity>

        <View style={{justifyContent:'center'}}>
            <Text>Already have an account? </Text>
            <TouchableOpacity style={{backgroundColor:'pink', alignItems:'center'}}
        
        >
          <Text style={styles.loginText}onPress={()=>navigation.navigate("Login")}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        </View>
  
     </View>
     
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 5,
      
    },
   
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
   
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
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
  });