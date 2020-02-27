import React,{Component,Fragment} from 'react';
import {View,Text, StyleSheet} from 'react-native';

export default class Terminalmsg extends Component{
  render(){
    return(
      <Fragment >
        <View style = {styles.msgConteiner}>
          <Text style = {styles.msgText}>
            {this.props.type}: {this.props.message}
          </Text>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  msgConteiner:{
    backgroundColor:'#fff',
    width:"96%",
    borderRadius:3,
    marginVertical:3, 
    marginLeft:"2%", 
    paddingVertical: 10,
    paddingLeft:"3%",
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  msgText:{
    color:'#222',
    fontSize:18,
    fontWeight:'bold',
  }
});