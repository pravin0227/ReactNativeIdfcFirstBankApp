// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Transfer from './components/Transfer';
import Resetpass from './components/Resetpass';
import Transactions from './components/Transactions';
import Deposithistory from './Deposithistory';
import deposithistory from './components/deposithistory';
import Withdrawhistory from './components/Withdrawhistory';
import Transferhistory from './components/Trasferhistory';








const Stack = createNativeStackNavigator();

function App() {



  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        
        <Stack.Screen name="Deposit" component={Deposit} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Withdraw" component={Withdraw} />
        <Stack.Screen name="Transfer" component={Transfer} />
        <Stack.Screen name="Resetpass" component={Resetpass} />
        <Stack.Screen name="Transactions" component={Transactions} />
        <Stack.Screen name="deposithistory" component={deposithistory} />
        <Stack.Screen name="Withdrawhistory" component={Withdrawhistory} />
        <Stack.Screen name="Transferhistory" component={Transferhistory} />
        
        
        
        
        
       
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;