import React, { Component } from 'react';
import { useFonts } from 'expo-font';
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
      <View style={{ flex: 1, padding: 24 , backgroundColor:"#6A4198",color:"white"}}>
          <Text style={styles.hirek}>Hírek</Text>   
      {isLoading ? <ActivityIndicator/> : (
        
          
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View>

              <View style={{alignItems: 'center'}}>

           
              <Image style={{width:300,height:200,marginTop:10,marginBottom:10, borderRadius: 10}} source={{uri: item.urlToImage}} /> 
              </View>

              <Text style={styles.title}>{item.title}</Text>

              <Text style={styles.alul2}>{item.description}</Text>
              <Text style={styles.alul3}>{item.content}</Text>

              <Text style={{fontSize:12,fontStyle:"italic",color:"#e65c00", textAlign: 'center', marginBottom: 10, fontFamily: "Inter-Black"}}>{item.publishedAt}, {item.source.name}</Text>
              
 
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
    marginBottom:5,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign:'center'
  },
  alul2:{
    color:"#b3b3ff",
    marginBottom:5,
    fontSize:14,
    textAlign:'justify'
  },
  alul3:{
    color:"#8080ff",
    marginBottom:5,
    fontSize:12,
    textAlign:'justify'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginHorizontal: 50,
    backgroundColor: '#150627'
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
  }
});