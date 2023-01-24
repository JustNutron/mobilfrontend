import React, { Component } from 'react';
import RNAnimatedBorder from "react-native-animated-border";
import {StyleSheet, ActivityIndicator, FlatList, Text, View, Image, Linking, Button, TextInput, Pressable, ViewBase } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getNews() {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0c25222bb1674978b62e0012fe2fe5ed');
      const json = await response.json();
      this.setState({ data: json.articles });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getNews(this.state.nyelv);
  }


  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 , backgroundColor:"black", color:"white"}}>
          <Text style={styles.hirek}>Hírek</Text>
          <View>

           <RNAnimatedBorder firstColor="white" secondColor="purple" borderWidth={5} borderRadius={25} margin={20}></RNAnimatedBorder>


          </View>
      {isLoading ? <ActivityIndicator/> : (
        
          
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={styles.hirekhatter}>

                <View style={{alignItems: 'center'}}>

           
                  <Image style={{width: 300 , height: 200, marginTop: 30, marginBottom: 10, borderRadius: 10}} source={{uri: item.urlToImage}} /> 
                </View>

                <Text style={styles.title}>{item.title}</Text>

                <Text style={styles.leiras}>{item.description}</Text>
                <Text style={styles.tartalom}>{item.content}</Text>
                <Text style={{fontSize: 12, fontStyle: "italic", color: "#710FE3", textAlign: 'center', marginBottom: 10,}}>{item.publishedAt}, {item.source.name}</Text>
              
 
                <Pressable style={styles.button} onPress={()=>Linking.openURL(item.url)}> 
                  <Text style={styles.text}>Olvass tovább itt...</Text>
                </Pressable>

              </View>
            )}
          />
        )}
      </View>
    );
  }
};
const styles = StyleSheet.create({
  gombfelirat:{
    color:"#e6e6ff"
  },
  bev:{
    height: 40,
    backgroundColor:"#000066",
    borderRadius:3,
    margin:10,
    padding:10,
    color:"#e6e6ff"

  },
  title:{
    color:"#e6e6ff",
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    paddingHorizontal: 20
  },
  leiras:{
    color:"#b3b3ff",
    marginBottom:5,
    fontSize: 12,
    textAlign:'justify',
    paddingHorizontal: 15
  },
  tartalom:{
    color:"#331556",
    marginBottom: 5,
    fontSize: 10,
    textAlign:'justify',
    paddingHorizontal: 15
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginHorizontal: 50,
    backgroundColor: '#150627',
    marginBottom: 25
  },
  text: {
    fontSize: 15,
    lineHeight: 40,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'white',
  },
  hirek: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  hirekhatter: {
    backgroundColor: '#9969D1',
    borderRadius: 25,
    marginBottom: 30,
    borderColor: 'purple',
    borderWidth: 5
  }
});