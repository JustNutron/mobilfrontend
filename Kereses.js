import React, {Component} from 'react';
import {Alert, Button, Pressable, StyleSheet, View, Text, FlatList, Image} from 'react-native';
import { TextInput } from 'react-native-paper';
const IP = require('./ipcim');



export default class ButtonBasics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      szo: "",
      dataSource2: [],
      dataSource3: [],
    };
  }

  kattintas=()=> {
    
    var bemenet={
      bevitel1:this.state.szo
     
    }
    // Alaplap keres
    fetch(IP.ipcim+'keresalap', {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
      this.setState({dataSource2: responseJson,
      }, function(){

      });

    })
    .catch((error) =>{
    console.error(error);
  });

  //Processzor keres
    fetch(IP.ipcim+'keresproci', {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({dataSource3: responseJson,
        }, function(){
  
      });
  
    })
    .catch((error) =>{
      console.error(error);
    });
  }
  
  render() {
    return (
      
      <View style={[styles.container,
        {
            flexDirection: "column"
        }

      ]}>
        <View style={{flex: 1, backgroundColor: 'purple', borderRadius: 20}}>
            <View style={styles.barview}>
            <TextInput
              style={{height: 40, borderColor:"blue",borderWidth:1, margin:10, padding:10}}
              placeholder="Termék"
              onChangeText={(szoveg) => this.setState({szo : szoveg})}
              value={this.state.szo}
      />       
                
            </View>
            <View style={styles.buttonview}>
                <Pressable onPress={()=>this.kattintas()}>
                    <Text>Keresés</Text>

                </Pressable>
            </View>
        </View>

            
        <View style={{flex: 2, backgroundColor: 'black'}}>
        <FlatList
            data={this.state.dataSource2}
            keyExtractor={({ alaplap_id}, index) => alaplap_id}
            renderItem={({ item }) => (

              <View style={{marginBottom:30}}>
              <Text style={styles.marka}>
                {item.alaplap_marka}
              </Text>
              <Text style={styles.tipus}>
                {item.alaplap_nev}
              </Text>
              <Image   source={{uri: IP.ipcim+item.alaplap_kep+'.png'}} style={styles.kep}   />          
              </View>
            )}
          />



          <FlatList
            data={this.state.dataSource3}
            keyExtractor={({ processzor_id}, index) => processzor_id}
            renderItem={({ item }) => (

              <View style={{marginBottom:30}}>
              <Text style={styles.marka}>
                {item.processzor_marka}
              </Text>
              <Text style={styles.tipus}>
                {item.processzor_nev}
              </Text>
              <Image   source={{uri: IP.ipcim+item.processzor_kep+'.png'}} style={styles.kep}   />          
              </View>
            )}
          />
        </View> 
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "black"
  },
  searcbar: {
    marginBottom: 50
  },

  barview: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20
  },
  buttonview: {
    marginLeft: 100,
    marginRight: 100
  },
  marka:{
    textAlign:'left',
    fontSize:21,
    color:'white',
    fontWeight:'bold',
    margin:5,
    textShadowOffset:{
      height:5,
      width:5
    },
    textShadowColor:'black',
    textShadowRadius:10
  },
  kep:{
    width:150,
    height:150,
    alignSelf:'flex-start',
    borderRadius:20,
    borderColor:'purple',
    borderWidth:5,
    marginLeft:10
  }

});