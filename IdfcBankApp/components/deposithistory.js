import { StatusBar } from "expo-status-bar";
import React, { useRef, useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    Alert,
    FlatList,
} from "react-native";
import Checkbox from "expo-checkbox";
import axios from "axios";
import { NativeScreenNavigationContainer } from "react-native-screens";


const deposithistory = ({ route, navigation }) => {

    const [acccount2, setacccount2] = useState("");
    const [amount, setamount] = useState("");
    const [depolist, setdepolist] = useState([]);

    const [statement, setstatement] = useState([]);
    const { accountno } = route.params;

    useEffect(() => {
        depositmenu();

    }, []);


    const depositmenu = () => {

        axios.get("http://192.168.43.81:8082/transaction/transfer/deposit/" + accountno)
            .then((response) => {
                //
                setstatement(response.data);
                console.log(response.data);

            })
            .catch((error) => {
                console.log(error);

            })

    }
    return (

        <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'flex-end' }}>


            <View style={{ backgroundColor: '#ded1d1', flex: 0.55, borderBottomEndRadius: 50, borderBottomStartRadius: 50, paddingTop: 50 }}>
                <Image style={styles.image} source={require("../assets2/download.png")} />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 45, margin: 49 }}>Deposit History</Text>
                </View>




            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 30, margin: 12 }}>transactions</Text>

                {/* <View style={{ backgroundColor: '#fff', alignItems: 'center', top: 10 }}> */}

                    <View style={{ flex: 1, paddingHorizontal: 3, backgroundColor: '#E6E1E1' }}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 3 }}>
                            <Text style={styles.table1}>Account No</Text>
                            <Text style={styles.table1}>Amount</Text>
                            <Text style={styles.table1}>Status</Text>
                            <Text style={styles.table1}>Time</Text>
                        </View>
                        <FlatList data={statement} renderItem={(e) => {
                            return <View style={{ flexDirection: 'row', paddingHorizontal: 2, backgroundColor: '#E6E1E1' }}>
                                <Text style={styles.table}>{e.item.accountno}</Text>
                                <Text style={styles.table}>{e.item.amount}</Text>
                                <Text style={styles.table}>{e.item.status}</Text>
                                <Text style={styles.table}>{e.item.time}</Text>
                            </View>
                            // return <Text style={{color:'white',fontSize:20}}>Account Number 1: {e.item.accNo1}  {"\n"} Account Number 2: {e.item.accNo2}  {"\n"} Transaction Type: {e.item.trnstype}  {"\n"} Amount: {e.item.amount} {"\n"}</Text>
                        }}></FlatList>

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
    table: {
        borderWidth: 1, width: 95, height: 100, paddingLeft: 12, paddingTop: 5, backgroundColor: '#9e3239', color: 'white', fontSize: 15
    },
    table1: {
        borderWidth: 1, width: 95, height: 50, paddingLeft: 12, paddingTop: 5, backgroundColor: '#9e3239', color: 'white', fontSize: 15
    },

    image: {
        marginTop: 20,
        resizeMode: 'cover',
        height: 70,
        width: 200,

        marginBottom: 10

    },

    inputView: {
        backgroundColor: "#fff",
        borderRadius: 10,
        width: "70%",
        height: 45,
        marginBottom: 30,
        marginTop: 30,
        textAlign: 'center',
        alignItems: "center",
        borderWidth: 2
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
        marginTop: 20,
        resizeMode: 'cover',
        height: 240,
        width: 400,

        marginBottom: 10

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
    checkboxcontainer: {
        marginBottom: 100,
        color: 'red',
    },
});

export default deposithistory;