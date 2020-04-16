import React,{ Component } from 'react'
import { View,StyleSheet,TouchableOpacity,Text } from 'react-native'

export default class PressBtn extends Component {
        
    render(){
        return(
            
                <TouchableOpacity onPress={this.props.onPress}>
                    <Text style={styles.btn} >{this.props.title}</Text>
                </TouchableOpacity>
            
        )
    }
}

const styles = StyleSheet.create({
btn:{
    
    fontSize:20,
    color:"#FFF",
    fontWeight:"bold",
    borderWidth:2,
    borderRadius:5,
    paddingHorizontal:30,
    paddingVertical:10,
    borderColor:"#FFF",
    marginBottom:120
  }
})