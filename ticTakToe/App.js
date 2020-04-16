import React from 'react';
import { Button, Alert,StyleSheet,Image, View,TouchableOpacity,Text,ActivityIndicator } from 'react-native';
import { Entypo } from "@expo/vector-icons"
import * as  Font from 'expo-font'

var itemArray = new Array(9).fill('empty')
 
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isCross:false,
      winMessage:"",
      isLoading:false
    }
  }


  

  drawItem = itemNumber =>{
    // decide what to draw cross or circle
    
    if(itemArray[itemNumber] === "empty"){
        itemArray[itemNumber] = this.state.isCross
        this.setState({isCross: !itemArray[itemNumber]},()=>{})
    }

    //check for win
    this.winGame()

    
    
  }

  chooseItem = itemNumber =>{
    //choose appropriate icon
    if(itemArray[itemNumber] !== "empty"){
      return itemArray[itemNumber]? "cross" : "circle"
    }
    return "pencil"
  }

  chooseItemColor = itemNumber =>{
    //choose which color icons should have 
    if(itemArray[itemNumber] !== "empty"){
      return itemArray[itemNumber]? "red" : "#FFF222"
    }
   // console.log('winMessage')
    return 'white'
  }

  winResult = (data) =>{
    if(data.length != 0 ){
      //Alert.alert(data)
      Alert.alert(
        data,
        'Lets play it again...',
        [
          {text: 'OK', onPress: () => this.resetGame()},
        ],
      );
    }
  }

  winGame = () =>{
    //decide or check winner
    if((itemArray[0]!== 'empty') && (itemArray[0] == itemArray[1]) && (itemArray[1] == itemArray[2])){
      this.setState({winMessage:(itemArray[0]? 'Cross' : 'Circle').concat(' Wins....')})
      
    }

    else if((itemArray[3]!== 'empty') && (itemArray[3] == itemArray[4]) && (itemArray[4] == itemArray[5])){
      this.setState({winMessage:(itemArray[3]? 'Cross' : 'Circle').concat(' Wins....')})
      
    }


    else if((itemArray[6]!== 'empty') && (itemArray[6] == itemArray[7]) && (itemArray[7] == itemArray[8])){
      this.setState({winMessage:(itemArray[6]? 'Cross' : 'Circle').concat(' Wins....')})
      
    }


    else if((itemArray[0]!== 'empty') && (itemArray[0] == itemArray[4]) && (itemArray[4] == itemArray[8])){
      this.setState({winMessage:(itemArray[0]? 'Cross' : 'Circle').concat(' Wins....')})
      
    }


    else if((itemArray[2]!== 'empty') && (itemArray[2] == itemArray[4]) && (itemArray[4] == itemArray[6])){
      this.setState({winMessage:(itemArray[2]? 'Cross' : 'Circle').concat(' Wins....')})
      
    }

    else if((itemArray[0]!== 'empty') && (itemArray[0] == itemArray[3]) && (itemArray[3] == itemArray[6])){
      this.setState({winMessage:(itemArray[0]? 'Cross' : 'Circle').concat(' Wins....')})
      
    }

    else if((itemArray[1]!== 'empty') && (itemArray[1] == itemArray[4]) && (itemArray[4] == itemArray[7])){
      this.setState({winMessage:(itemArray[1]? 'Cross' : 'Circle').concat(' Wins....')})
      
    }

    else if((itemArray[2]!== 'empty') && (itemArray[2] == itemArray[5]) && (itemArray[5] == itemArray[8])){
      this.setState({winMessage:(itemArray[2]? 'Cross' : 'Circle').concat(' Wins....')})
      
    }

    
    return
  }

  


  resetGame = () =>{
    //reset game 
    itemArray.fill('empty')
    this.setState({ winMessage:''})
    
  }

  async componentDidMount(){
    await Font.loadAsync({
      'pacifico':require('./assets/font/Pacifico.ttf'),
    })

    this.setState({isLoading:true})
  }
  

  render() {
     return (
          
      <View style={styles.container}>
        { this.state.isLoading ? 
          <View style={styles.grid}>
            <Text style={styles.heading}>Tic Tac Toe</Text>
              <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={()=>{this.drawItem(0)}}
              >
                <Entypo 
                name={this.chooseItem(0)}
                size={50}
                color={this.chooseItemColor(0)}/>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={()=>{this.drawItem(1)}}
              >
                <Entypo 
                name={this.chooseItem(1)}
                size={50}
                color={this.chooseItemColor(1)}/>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={()=>{this.drawItem(2)}}
              >
                <Entypo 
                name={this.chooseItem(2)}
                size={50}
                color={this.chooseItemColor(2)}/>
              </TouchableOpacity>
            </View>

          </View>
              <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={()=>{this.drawItem(3)}}
              >
                <Entypo 
                name={this.chooseItem(3)}
                size={50}
                color={this.chooseItemColor(3)}/>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={()=>{this.drawItem(4)}}
              >
                <Entypo 
                name={this.chooseItem(4)}
                size={50}
                color={this.chooseItemColor(4)}/>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={()=>{this.drawItem(5)}}
              >
                <Entypo 
                name={this.chooseItem(5)}
                size={50}
                color={this.chooseItemColor(5)}/>
              </TouchableOpacity>
            </View>

          </View>
              <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={()=>{this.drawItem(6)}}
              >
                <Entypo 
                name={this.chooseItem(6)}
                size={50}
                color={this.chooseItemColor(6)}/>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={()=>{this.drawItem(7)}}
              >
                <Entypo 
                name={this.chooseItem(7)}
                size={50}
                color={this.chooseItemColor(7)}/>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={()=>{this.drawItem(8)}}
              >
                <Entypo 
                name={this.chooseItem(8)}
                size={50}
                color={this.chooseItemColor(8)}/>
              </TouchableOpacity>
            </View>

          </View>
              <Text style={styles.winMessage}>{this.winResult(this.state.winMessage)}</Text>
          </View>
         
        : <ActivityIndicator size="large"/> }
        </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'#586776',
  },

  grid:{

  },

  row:{
    flexDirection:"row"
  },

  item:{
    borderWidth:2,
    borderColor:"#000",
    padding:30,
    backgroundColor:'#487EB0'
  },
  winMessage:{
    padding:20,
    fontSize:25,
    fontWeight:"bold"
  },
  button:{
    margin:20,
    padding:10
  },
  btn:{
    color:"#FFF",
    fontWeight:"bold",
    fontSize:20
  },

  heading:{
    fontSize:30,
    marginBottom:30,
    color:"#1BCA9B",
    paddingLeft:80,
    fontFamily:'pacifico',
    
    
  }
})