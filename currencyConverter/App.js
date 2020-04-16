import React from 'react';
import {  StyleSheet,
          Text, 
          View, 
          SafeAreaView, 
          TextInput, 
          TouchableOpacity, 
          Alert, 
          TouchableWithoutFeedback,
        Keyboard} from 'react-native';

import CurrencyBtn from './src/components/button'
const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND:0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
}



export default class App extends React.Component {
constructor(props){
  super(props)
  //declaring state
  this.state = {
    inputValue: "",
    resultValue: "0.0"
  }
}

buttonPressed = currency => {
  if(this.state.inputValue === ""){
  Alert.alert('Enter some value'+ " (" + currency + ")")
  return
  }

  // let data = Number(this.state.inputValue)
  // console.log(isNaN(data));

      if(isNaN(Number(this.state.inputValue))){
        Alert.alert("Enter numeric values only!")
        this.setState({inputValue:"",resultValue:"0.0"})
        return
        
      }
  
      else{
        if(parseFloat(this.state.inputValue ) < 0){
          Alert.alert("Enter +ve Value")
          this.setState({inputValue:"",resultValue:"0.0"})
          return
        }
        let result = parseFloat(this.state.inputValue ) * currencyPerRupee[currency]
        this.setState({resultValue: result.toFixed(2)})
  }
}


render(){
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <View style={styles.screenview}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{this.state.resultValue}</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input}
            selectionColor="#FFF"
            keyboardType="numeric"
            placeholder="Enter Value"
            value={this.state.inputValue}
            onChangeText={ inputValue => {
              this.setState({
                inputValue
              })
            }}
        
          />
        </View>

        <View style={styles.converterBtnContainer}>
          {/* using components */}
        <CurrencyBtn text="$" onPress={()=>this.buttonPressed("DOLLAR")} />
        <CurrencyBtn text="Euro" onPress={()=>this.buttonPressed("EURO")} />
        <CurrencyBtn text="Pound" onPress={()=>this.buttonPressed("POUND")} />
        <CurrencyBtn text="Aus" onPress={()=>this.buttonPressed("AUSDOLLAR")} />
        <CurrencyBtn text="Canada" onPress={()=>this.buttonPressed("RUBEL")} />
        <CurrencyBtn text="Yen" onPress={()=>this.buttonPressed("CANDOLLAR")} />
        <CurrencyBtn text="Dinar" onPress={()=>this.buttonPressed("YEN")} />
        <CurrencyBtn text="Bitcoin" onPress={()=>this.buttonPressed("BITCOIN")} />
        <CurrencyBtn text="Rubel" onPress={()=>this.buttonPressed("DINAR")} />
        </View>

        {/* <View style={styles.converterBtnContainer}>
          // using direct method! 
          <TouchableOpacity 
            style={styles.conveterBtn}
            onPress={()=> this.buttonPressed("DOLLAR")}
          >
            <Text style={styles.converterBtnText}>$</Text>  
          </TouchableOpacity>

          
          <TouchableOpacity 
            style={styles.conveterBtn}
            onPress={()=> this.buttonPressed("EURO")}
          >
            <Text style={styles.converterBtnText}>Euro</Text>  
          </TouchableOpacity>

         
          <TouchableOpacity 
            style={styles.conveterBtn}
            onPress={()=> this.buttonPressed("POUND")}
          >
            <Text style={styles.converterBtnText}>Pound</Text>  
          </TouchableOpacity>

        
          <TouchableOpacity 
            style={styles.conveterBtn}
            onPress={()=> this.buttonPressed("AUSDOLLAR")}
          >
            <Text style={styles.converterBtnText}>AusDollar</Text>  
          </TouchableOpacity>

         
          <TouchableOpacity 
            style={styles.conveterBtn}
            onPress={()=> this.buttonPressed("CANDOLLAR")}
          >
            <Text style={styles.converterBtnText}>Canada</Text>  
          </TouchableOpacity>

      
          <TouchableOpacity 
            style={styles.conveterBtn}
            onPress={()=> this.buttonPressed("YEN")}
          >
            <Text style={styles.converterBtnText}>Yen</Text>  
          </TouchableOpacity>


          
          <TouchableOpacity 
            style={styles.conveterBtn}
            onPress={()=> this.buttonPressed("DINAR")}
          >
            <Text style={styles.converterBtnText}>Dinar</Text>  
          </TouchableOpacity>

          
          <TouchableOpacity 
            style={styles.conveterBtn}
            onPress={()=> this.buttonPressed("BITCOIN")}
          >
            <Text style={styles.converterBtnText}>Bitcoin</Text>  
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.conveterBtn}
            onPress={()=> this.buttonPressed("RUBEL")}
          >
            <Text style={styles.converterBtnText}>Rubel</Text>  
          </TouchableOpacity>


        </View> */}
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#758AA2',
    marginTop:20
  },

  screenview:{
    flex:1,
  },

  resultContainer:{
    flex:2,
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#FF3E4D",
    alignItems: "center",
    borderWidth: 2,
    borderRadius:8
  },

  resultValue:{
    fontSize:30,
    fontWeight:"bold",
    color:'#FFF'
  },

  inputContainer:{
    flex:1,
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth:2,
    borderColor: "#c1c1c1",
    backgroundColor: '#6A89CC',
    borderRadius:8
    
  },

  input:{
    fontSize: 20,
    color: "white",
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center"
  },

  converterBtnContainer: {
    flex:5,
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:40,
    
  },

  conveterBtn:{
    alignItems:"center",
    justifyContent:"center",
    height:100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    borderRadius:25,
    backgroundColor: "#192A56",
    width:"33.3%"
  },

  converterBtnText:{
    fontSize:20,
    fontWeight:"bold",
    color:"#FFF"

  }



});
