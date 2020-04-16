import React, { Component } from 'react';
import { ToastAndroid, View, Text,StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import { Button } from 'native-base'
import { FontAwesome } from '@expo/vector-icons'

//get array of length
let itemArray = new Array(25).fill("empty")
let count = 0
let flagWin = false

const Toast = (props) => {
  if (props.visible) {
      ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return null;
  }

  if (props.win) {
    ToastAndroid.showWithGravityAndOffset(
    props.message,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50,
  );
  return null;
}
  return null;
}

export default class App extends React.Component {
  

  constructor(props) {
    super(props);
    
    this.state = {
      randomNumber: "",
      visible:false,
      win:false,
      
    };
  }


  //when app loads up 
  componentDidMount = ()=>{
    //call Generate random number
    this.setState({randomNumber:this.generateRandomNumber()})
  }

  generateRandomNumber = ()=>{
    //generate random number

    let randomNumber = Math.floor(Math.random()*25)
    this.setState({randomNumber:randomNumber , isScratched:true })    
    
    return randomNumber
  }

  scratchItem = (itemNumber) => {
    //decide lucky or unlucky
    
    
    if(count <= 4){
    
      if(this.state.randomNumber === itemNumber){
        itemArray[itemNumber] = 'Lucky'
        count = 5
        flagWin = true
        this.setState({win:true},() =>{this.hideToast()})

      }
      else{
        itemArray[itemNumber] = 'Unlucky'
        count++
        

      }
      this.forceUpdate();
      
  }
  
    else{
      // add a toast saying game is over, either press reset game or show all coupons.
      if(flagWin){
        this.setState({win:true},() =>{this.hideToast()})
      }
    
      else{
        this.setState({visible:true},() =>{this.hideToast()})
        
      }

    }
}


// Hide toast method
  hideToast = () => {
  this.setState({
    visible: false,
    win:false
    });
  };


  scratchItemIcon = (itemNumber)=>{
    //Find right icon

    if(itemArray[itemNumber] === "Lucky"){
      return "dollar"
    }

    else if (itemArray[itemNumber] === "Unlucky"){
      return "frown-o"
    }
    
    return "circle"
  }

  scratchItemIconColor = (itemNumber)=>{
    //TODO: find right color
    if(itemArray[itemNumber] ==="Lucky"){
      return "yellow"
    }

    else if (itemArray[itemNumber] === "Unlucky"){
      return "red"
    }
    
    return "black"
  }

  showAllIcons = ()=>{
    //button - reveal all icons
    itemArray.fill("Unlucky")
    itemArray[this.state.randomNumber] = 'Lucky'
    this.forceUpdate()
  }

  resetGame = ()=>{
    //Button - reset the game
    this.setState({randomNumber:this.generateRandomNumber()}, () =>{
      itemArray.fill('empty')
      count = 0
      flagWin = false
      this.forceUpdate()
    })
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> App </Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.itemrow}>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(0)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(0)}
              size={50}
              color={this.scratchItemIconColor(0)}
              />

            </TouchableOpacity>
           
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(1)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(1)}
              size={50}
              color={this.scratchItemIconColor(1)}
              />

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(2)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(2)}
              size={50}
              color={this.scratchItemIconColor(2)}
              />

            </TouchableOpacity>
    
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(3)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(3)}
              size={50}
              color={this.scratchItemIconColor(3)}
              />

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(4)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(4)}
              size={50}
              color={this.scratchItemIconColor(4)}
              />

            </TouchableOpacity>
    
          </View>
          <View style={styles.itemrow}>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(5)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(5)}
              size={50}
              color={this.scratchItemIconColor(5)}
              />

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(6)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(6)}
              size={50}
              color={this.scratchItemIconColor(6)}
              />

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(7)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(7)}
              size={50}
              color={this.scratchItemIconColor(7)}
              />

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(8)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(8)}
              size={50}
              color={this.scratchItemIconColor(8)}
              />

            </TouchableOpacity>
    
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(9)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(9)}
              size={50}
              color={this.scratchItemIconColor(9)}
              />

            </TouchableOpacity>
    
          </View>
          <View style={styles.itemrow}>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(10)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(10)}
              size={50}
              color={this.scratchItemIconColor(10)}
              />

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(11)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(11)}
              size={50}
              color={this.scratchItemIconColor(11)}
              />

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(12)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(12)}
              size={50}
              color={this.scratchItemIconColor(12)}
              />

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(13)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(13)}
              size={50}
              color={this.scratchItemIconColor(13)}
              />

            </TouchableOpacity>
    
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(14)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(14)}
              size={50}
              color={this.scratchItemIconColor(14)}
              />

            </TouchableOpacity>
    
          </View>
          <View style={styles.itemrow}>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(15)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(15)}
              size={50}
              color={this.scratchItemIconColor(15)}
              />

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(16)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(16)}
              size={50}
              color={this.scratchItemIconColor(16)}
              />

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(17)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(17)}
              size={50}
              color={this.scratchItemIconColor(17)}
              />

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(18)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(18)}
              size={50}
              color={this.scratchItemIconColor(18)}
              />

            </TouchableOpacity>
    
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(19)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(19)}
              size={50}
              color={this.scratchItemIconColor(19)}
              />

            </TouchableOpacity>
    
          </View>
          <View style={styles.itemrow}>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(20)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(20)}
              size={50}
              color={this.scratchItemIconColor(20)}
              />

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(21)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(21)}
              size={50}
              color={this.scratchItemIconColor(21)}
              />

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(22)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(22)}
              size={50}
              color={this.scratchItemIconColor(22)}
              />

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(23)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(23)}
              size={50}
              color={this.scratchItemIconColor(23)}
              />

            </TouchableOpacity>
    
            <TouchableOpacity
            style={styles.item}
            onPress={()=>{
              this.scratchItem(24)
            }}
            >
              <FontAwesome
              name={this.scratchItemIcon(24)}
              size={50}
              color={this.scratchItemIconColor(24)}
              />

            </TouchableOpacity>
    
          </View>
        </View>

        <Button full success style={styles.button} onPress={()=>{
          this.showAllIcons()
        }}>
          <Text style={styles.btnText}>show all coupons</Text>
        </Button>
        
        <Button full reset style={styles.button} onPress={()=>{this.resetGame()}}>
          <Text style={styles.btnText}>Reset</Text>
        </Button>
        <Toast visible={this.state.visible} message="You had only 5 chances.Now either click on show all coupens or reset this game!"/> 
        <Toast visible={this.state.win} message="You won..... Now reset this game to play more."/> 
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333945',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid:{},
  itemrow:{
    flexDirection:"row"
  },
  item:{
    alignItems:"center",
    padding:10,
    borderWidth:2,
    borderColor:"#000",
    minWidth:70,
    
  },
  button:{
    marginVertical:15
  },
  btnText:{
    fontSize:17,
    color:'#FFF'
  },
  header:{
    backgroundColor:"#E74292",
    height:50,
    justifyContent:'center',
    width: Dimensions.get('window').width,
    marginVertical:10

  },
  headerText:{
    color:"#FFF",
    fontSize:20,
    textAlign:'center'
  }

});
