import React, { Component } from 'react';
import {StyleSheet, ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity,ScrollView ,SafeAreaView} from 'react-native';



export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }
  
  render() {
    const { data, isLoading } = this.state;


    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
        <Text style={styles.cim}>Választékunk</Text>



        <Text style={styles.alcim}>Alaplap</Text>
        <TouchableOpacity
         style={styles.button}
         onPress={()=>this.props.navigation.navigate('Alaplapok')}

        >
         
         <Image style={styles.kiskep} source={require('./kepek/alaplap.jpg')} />
        </TouchableOpacity>

        <Text style={styles.alcim}>Processzor</Text>
        <TouchableOpacity
         style={styles.button}
         onPress={()=>this.props.navigation.navigate('Processzorok')}
       >
         
         <Image style={styles.kiskep} source={require('./kepek/processzor.jpg')} />
       </TouchableOpacity>

       <Text style={styles.alcim}>Memória</Text>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         
         <Image style={styles.kiskep} source={require('./kepek/memoria.jpg')} />
       </TouchableOpacity>

       <Text style={styles.alcim}>Háttértár</Text>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         
         <Image style={styles.kiskep} source={require('./kepek/hatter.jpg')} />
       </TouchableOpacity>

       <Text style={styles.alcim}>Táp</Text>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         
         <Image style={styles.kiskep} source={require('./kepek/tap.jpg')} />
       </TouchableOpacity>

       <Text style={styles.alcim}>Hütő</Text>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         
         <Image style={styles.kiskep} source={require('./kepek/huto.jpg')} />
       </TouchableOpacity>

       <Text style={styles.alcim}>Videókártya</Text>
       <TouchableOpacity
         style={styles.button}
         onPress={()=>this.props.navigation.navigate('Videokartya')} 
       >
         <Image style={styles.kiskep} source={require('./kepek/videokartya.jpg')} />
       </TouchableOpacity>

       <Text style={styles.alcim}>Gépház</Text>
       <TouchableOpacity
         style={styles.button}
         onPress={()=>this.props.navigation.navigate('Gephaz')}
       >
         
         <Image style={styles.kiskep} source={require('./kepek/gephaz.jpg')} />
       </TouchableOpacity>

          
        
       </ScrollView>
    </SafeAreaView>
    );
  }
};


const styles = StyleSheet.create({

  button: {
    alignItems: "center",
    padding: 20,
    marginLeft:30,
    marginRight:30
  },

  cim:{
    textAlign:'center',
    fontSize:38,
    fontWeight:'bold',
    padding:10,
    margin:10,
    color:'white',
    textShadowOffset:{
      height:5,
      width:5
    },
    textShadowColor:'black',
    textShadowRadius:20

  },
  scrollView: {
    marginTop:50,
    marginBottom:10,
    backgroundColor: '#9969D1',
    marginHorizontal: 20,
    borderRadius:20,
    borderColor:'purple',
    borderWidth:5
  },
  container:{
    backgroundColor:'black'
  },
  alcim:{
    color:'white',
    textAlign:'center',
    padding:8,
    fontWeight:'bold',
    fontSize:18,
    textShadowOffset:{
      height:5,
      width:5
    },
    textShadowColor:'black',
    textShadowRadius:10
  },
  kiskep:{
    width:250,
    height:250,
    alignSelf:'center',
    borderRadius:20,
    borderColor:'purple',
    borderWidth:5
  }
});