import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Processzorok from './Processzorok'
import Alaplapok from './Alaplapok'
import Kezdolap from './Kezdolap'



//function HomeScreen({ navigation }) {
 // return (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //    <Button
    //    onPress={() => navigation.navigate('Notifications')}
      //  title="Go to notifications"
     // />
   // </View>
 // );
//}

//function NotificationsScreen({ navigation }) {
 // return (
 //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //    <Button onPress={() => navigation.goBack()} title="Go back home" />
   // </View>
 // );
//}



function Kezdo_lap({ navigation }) {
  return (
    <Kezdolap />
  );
}


function Processzorok_lap({ navigation }) {
  return (
   <Processzorok />
  );
}


function Alaplapok_lap({ navigation }) {
  return (
   <Alaplapok />
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation screenOptions={{drawerStyle: {backgroundColor: '#8D75AA', width: 240}, headerShown: false, drawerActiveTintColor: 'purple' }} >
        <Drawer.Screen name="Kezdőlap" component={Kezdo_lap}/>
        <Drawer.Screen name="Processzorok" component={Processzorok_lap} />
        <Drawer.Screen name="Alaplapok" component={Alaplapok_lap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}