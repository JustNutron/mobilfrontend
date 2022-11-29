import React, { Component } from 'react';
import {StyleSheet, ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getMovies() {
    try {
      const response = await fetch('http://192.168.198.169/processzor');
      const json = await response.json();
      console.log(json)
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getMovies();
  }

 /* szavazat=(szam)=>{
    //alert(szam)
    var adatok={
      bevitel1:szam
    }
    alert(adatok.bevitel1)
    const response = fetch('http://192.168.198.169:3000/processzor',{
      method: "POST",
      body: JSON.stringify(adatok),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
      const text =  response.text();
      console.log(text)
  }
  */


  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 , marginTop:40}}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ processzor_id }, index) => processzor_id}
            renderItem={({ item }) => (

              <View style={{marginBottom:30}}>
              <Text style={{fontSize:30,color:'darkred',textAlign:'center'}}>
                {item.processzor_nev}
              </Text>
              <Image   source={{uri:'http://192.168.198.169:3000/'+item.processzor_kep+'.png'}} style={{width:300,height:300,alignSelf:'center'}}   />
             {/* <TouchableOpacity
          style={styles.button}
          onPress={async ()=>this.szavazat(item.film_id)}
        >
          <Text style={{color:'white',fontSize:30}}>Erre szavazok</Text>
        </TouchableOpacity>   */}        
              </View>
            )} 
          />
        )}
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    marginLeft:30,
    marginRight:30
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});