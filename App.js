import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Processzorok from './Processzorok'
import Alaplapok from './Alaplapok'
import Kezdolap from './Kezdolap'
import Beallitasok from './Beallitasok'
import Profil from './Profil'
import Pcepites from './PC_epites'




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




function Pcepites_lap({ navigation }) {
  return (
    <Pcepites />
  );
}


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

function Profil_lap({ navigation }) {
  return (
   <Profil />
  );
}

function Beallitasok_lap({ navigation }) {
  return (
   <Beallitasok />
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation
        screenOptions={{drawerStyle: {backgroundColor: '#8D75AA', width: 200},
        headerShown: false, drawerActiveTintColor: 'purple',
        }} >
        <Drawer.Screen name="Kezdőlap" component={Kezdo_lap} options={{
          drawerIcon: ({color}) => (
            <Ionicons name='home-outline' size={22} color={color}/>
          )
        }}/>
        <Drawer.Screen name="Profil" component={Profil_lap} options={{
          drawerIcon: ({color}) => (
            <Ionicons name='person-outline' size={22} color={color}/>
          )
        }}/>
        <Drawer.Screen name="Beállítások" component={Beallitasok_lap} options={{
          drawerIcon: ({color}) => (
            <Ionicons name='settings-outline' size={22} color={color}/>
          )
        }}/>
        <Drawer.Screen name="PC építés" component={Pcepites_lap} />
        <Drawer.Screen name="Processzorok" component={Processzorok_lap} />
        <Drawer.Screen name="Alaplapok" component={Alaplapok_lap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}