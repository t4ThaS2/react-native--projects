import React from 'react';
import PressBtn from './src/components/TouchableBtn'
import {  StyleSheet,
          Text,
          View,
          Image,        
} from 'react-native';

export default class App extends React.Component  {
  
  constructor(props){
    super(props)
    this.state = {
      dice1Uri : require('./src/images/dice1.png'),
      dice2Uri : require('./src/images/dice1.png')
    }
  }

  getRandomValue = () => {
    return Math.floor((Math.random() * 6)+1)
  }


  ButtonPressed = () => {
    let rNumber1 = this.getRandomValue()
    let rNumber2 = this.getRandomValue()
    
    switch(rNumber1){
      case 1: this.setState({dice1Uri:require('./src/images/dice1.png')})
              break

      case 2: this.setState({dice1Uri:require('./src/images/dice2.png')})
              break        
      
      case 3: this.setState({dice1Uri:require('./src/images/dice3.png')})
              break
      
      case 4: this.setState({dice1Uri:require('./src/images/dice4.png')})
              break

      case 5: this.setState({dice1Uri:require('./src/images/dice5.png')})
              break

      case 6: this.setState({dice1Uri:require('./src/images/dice6.png')})
              break
      
      default:
        this.setState({dice1Uri:require('./src/images/dice1.png')})

        break
    }


    switch(rNumber2){
      case 1: 
              this.setState({dice2Uri:require('./src/images/dice1.png')})
              break

      case 2: 
              this.setState({dice2Uri:require('./src/images/dice2.png')})
              break        
      
      case 3: 
              this.setState({dice2Uri:require('./src/images/dice3.png')})
              break
      
      case 4: 
              this.setState({dice2Uri:require('./src/images/dice4.png')})        
              break

      case 5: 
              this.setState({dice2Uri:require('./src/images/dice5.png')})        
              break

      case 6: 
              this.setState({dice2Uri:require('./src/images/dice6.png')})        
              break
      
      default:
        this.setState({dice2Uri:require('./src/images/dice1.png')})
        break
    }
     
    //this.setState({uri: require(`./src/images/dice${this.getRandomValue()}.png`)})
  }





  render(){
  return (
    
    <View style={styles.container1}>
        <View style={styles.container2}>
          <Image style={styles.dice} source={this.state.dice1Uri}
          />
          <Image style={styles.dice} source={this.state.dice2Uri}
          />
        </View>
        <PressBtn onPress={() => this.ButtonPressed()} title="lets roll"/>
      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#30336B',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  container2: {
    flex:1,
    flexDirection:"row",
    backgroundColor: '#30336B',
    height:100,
    width:250,
    marginTop:190,
    
    },

  dice:{
    width:80,
    height:80,
    marginLeft:30,
    marginRight:5,
    marginTop:40
    
  },
  
});
