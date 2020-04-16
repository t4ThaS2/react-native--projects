import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image ,ScrollView,ActivityIndicator} from 'react-native';
import { Audio } from 'expo-av';
import * as Font from 'expo-font'
const listBackGroundColor = {
  1:"#8B78E6",
  2:"#EA7773",
  3:"#758AA2",
  4:"#1BCA9B",
  5:"#E83350",
  6:"#0ABDE3",
  7:"#FAC42F",
  8:"#f95d6a",
  9:"#FF3031",
  10:"#192A56",
}


const soundList = {
  one: require('./assets/one.wav'),
  two: require('./assets/two.wav'),
  three: require('./assets/three.wav'),
  four: require('./assets/four.wav'),
  five: require('./assets/five.wav'),
  six: require('./assets/six.wav'),
  seven: require('./assets/seven.wav'),
  eight: require('./assets/eight.wav'),
  nine: require('./assets/nine.wav'),
  ten: require('./assets/ten.wav'),
}
export default class App extends React.Component {

  //creating function for handling these sound and numbers
  playSound = async number => {
    const soundObject = new Audio.Sound()
    try{
        let path = soundList[number]
        await soundObject.loadAsync(path)
        await soundObject
        .playAsync()
        .then(async PlaybackStatus => {
        setTimeout(() => {
            soundObject.unloadAsync();
        }, PlaybackStatus.playableDurationMillis);
        })
        .catch(error => {
            console.log(error)
      })
    }

    catch(error){
      console.log(error)
    }
    
  }
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading:false,
    };
  }


  async componentDidMount(){
    await Font.loadAsync({
      'pacifico':require('./assets/fonts/Pacifico.ttf'),
      'crete-round':require('./assets/fonts/CreteRound-Regular.ttf'),
    })

    this.setState({
      isLoading:true
    })
  }

  render() {
    return (
      
      <ScrollView style={styles.container}>
        {this.state.isLoading ? 
        <View style={styles.gridContainer}>
          <Image style={styles.logo}
          source={require('./assets/logo.png')}
          />
          <Text style={styles.headText}>Let's learn some spanish números!</Text>
          <View style={styles.rowContainer}>
            <TouchableOpacity 
            style={[{backgroundColor:listBackGroundColor[1]},styles.item]}
            onPress={()=>{this.playSound("one")}}
            >
              <Text style={styles.itemText}>One</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[{backgroundColor:listBackGroundColor[2]},styles.item]}
            onPress={()=>{this.playSound("two")}}
            >
              <Text style={styles.itemText}>Two</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity 
            style={[{backgroundColor:listBackGroundColor[3]},styles.item]}
            onPress={()=>{this.playSound("three")}}
            >
              <Text style={styles.itemText}>Three</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[{backgroundColor:listBackGroundColor[4]},styles.item]}
            onPress={()=>{this.playSound("four")}}
            >
              <Text style={styles.itemText}>Four</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity 
            style={[{backgroundColor:listBackGroundColor[5]},styles.item]}
            onPress={()=>{this.playSound("five")}}
            >
              <Text style={styles.itemText}>Five</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[{backgroundColor:listBackGroundColor[6]},styles.item]}
            onPress={()=>{this.playSound("six")}}
            >
              <Text style={styles.itemText}>Six</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity 
            style={[{backgroundColor:listBackGroundColor[7]},styles.item]}
            onPress={()=>{this.playSound("seven")}}
            >
              <Text style={styles.itemText}>Seven</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[{backgroundColor:listBackGroundColor[8]},styles.item]}
            onPress={()=>{this.playSound("eight")}}
            >
              <Text style={styles.itemText}>Eight</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity 
            style={[{backgroundColor:listBackGroundColor[9]},styles.item]}
            onPress={()=>{this.playSound("nine")}}
            >
              <Text style={styles.itemText}>Nine</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[{backgroundColor:listBackGroundColor[10]},styles.item]}
            onPress={()=>{this.playSound("ten")}}
            >
              <Text style={styles.itemText}>Ten</Text>
            </TouchableOpacity>
          </View>
   
        </View>
        : <ActivityIndicator/>}
      </ScrollView>
      
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#000"

  },
  gridContainer:{
    flex:1,
    margin:5,
    backgroundColor:"#000"
  },
  logo:{
    marginTop:35,
    marginBottom:20,
    alignSelf:"center",
    height:70,
    width:70,
    flexWrap:"nowrap"
  },
  rowContainer:{
  padding:0,
  margin:0   
    
  },
  item:{
    flex:1,
    height:80,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    borderRadius:10,
    borderColor:"#2F363F",
    borderWidth:2

  },
  itemText:{
    color:"#FFF",
    fontSize:20,
    fontFamily:'crete-round'
  },
  headText:{
    color:"#F4C724",
    textAlign:"center",
    fontSize:30,
    marginBottom:30,
    fontFamily:"pacifico",
    
  }
})