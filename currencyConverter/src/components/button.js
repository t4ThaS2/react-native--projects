import React, { Component } from 'react'
import {  StyleSheet,
    Text, 
    View, 
    SafeAreaView, 
    TextInput, 
    TouchableOpacity, 
    Alert } from 'react-native';

export default class CurrencyBtn extends Component {
    render(){
        return(
            <TouchableOpacity 
            style={styles.conveterBtn}
            onPress={()=> this.props.onPress()}
          >
            <Text style={styles.converterBtnText}>{this.props.text}</Text>  
          </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
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

    })