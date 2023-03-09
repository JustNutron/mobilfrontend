import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Processzorok from './Processzorok'
import Alaplapok from './Alaplapok'
import Kezdolap from './Kezdolap'
import Beallitasok from './Beallitasok'
import Profil from './Profil'
import Pcepites from './Pcepites'
import Videokartya from './Videokartya'
import Gephaz from './Gephaz'
import Alkatreszek from './Alkatreszek'
import Kereses from './Kereses'
import Valogat from './Valogat'


function Alkatreszek_lap({ navigation }) {
  return (
    <Alkatreszek navigation={ navigation } />
  );
}

function Kereses_lap({ navigation }) {
  return (
    <Kereses navigation={ navigation } />
  );
}

function Pcepites_lap({ navigation }) {
  return (
    <Pcepites navigation={ navigation } />
  );
}

function Alaplapok_lap({ navigation }) {
  return (
    <Alaplapok navigation={navigation}
      options={{headerShown: false }}/>
  );
}


function Processzorok_lap({ navigation }) {
  return (
   <Processzorok navigation={ navigation }
    options={{headerShown: false}}/>
  );
}

function Videokartya_lap({ navigation }) {
  return (
    <Videokartya navigation={navigation}
      options={{headerShown: false }}/>
  );
}

function Gephaz_lap({ navigation }) {
  return (
    <Gephaz navigation={navigation}
      options={{headerShown: false }}/>
  );
}

//Isitmtől nekem
function Valogat_lap({ navigation }) {
  return (
    <Valogat navigation={navigation}
      options={{headerShown: false }}/>
  );
}

function Kezdo_lap({ navigation }) {
  return (
    <Kezdolap/>
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

function Root({ navigation }) {
  return (
    <Drawer.Navigator useLegacyImplementation
        screenOptions={{drawerStyle: {backgroundColor: '#8D75AA', width: 260},
        headerShown: false, drawerActiveTintColor: 'purple',
        }} >
        <Drawer.Screen name="Kezdőlap" component={Kezdo_lap} options={{
          drawerIcon: ({color}) => (
            <Ionicons name='home' size={22} color={color}/>
          )
        }}/>
        <Drawer.Screen name="Keresés" component={Kereses_lap} options={{
          drawerIcon: ({color}) => (
            <Ionicons name='search' size={22} color={color}/>
          )
        }}/>
        <Drawer.Screen name="Profil" component={Profil_lap} options={{
          drawerIcon: ({color}) => (
            <Ionicons name='person' size={22} color={color}/>
          )
        }}/>
        <Drawer.Screen name="Beállítások" component={Beallitasok_lap} options={{
          drawerIcon: ({color}) => (
            <Ionicons name='settings' size={22} color={color}/>
          )
        }}/>
        <Drawer.Screen name="PC Építés" component={Pcepites_lap} options={{
          drawerIcon: ({color}) => (
            <Ionicons name='build' size={22} color={color}/>
          )
        }}/>
         <Drawer.Screen name="Alkatrészek" component={Alkatreszek_lap} options={{
          drawerIcon: ({color}) => (
            <Ionicons name='basket' size={22} color={color}/>
          )
        }}/>
        <Drawer.Screen name="Válogat" component={Valogat_lap} options={{
          drawerIcon: ({color}) => (
            <Ionicons name='basket' size={22} color={color}/>
          )
        }}/>
        
      {/*  <Drawer.Screen name="Processzorok" component={Processzorok_lap} />
       <Drawer.Screen name="Alaplapok" component={Alaplapok_lap} /> */} 
      </Drawer.Navigator>

  );
}



const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
      name="Root"
      component={Root}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Alaplapok" component={Alaplapok} options={{headerShown: false}}/>
    <Stack.Screen name="Processzorok" component={Processzorok} options={{headerShown: false}} />
    <Stack.Screen name="Videokartya" component={Videokartya} options={{headerShown: false}} />
    <Stack.Screen name="Gephaz" component={Gephaz} options={{headerShown: false}} />
    

    </Stack.Navigator>
    </NavigationContainer>
  );
}