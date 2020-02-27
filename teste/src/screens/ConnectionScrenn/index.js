import React, {Component} from 'react';

import { TextInput, View, StyleSheet, Button, ToastAndroid } from 'react-native';


export default class ConnectionScrenn extends Component{
  constructor(props){
    super(props);
    this.state = {
      ip:"",
      port:"",
    }
  }
  handleClick = () =>{  
    const { ip, port} = this.state;
    //ToastAndroid.show(`estabelecendo conexão com ${ip}:${port}...`, ToastAndroid.SHORT);
    //ToastAndroid.show(JSON.stringify(this.state) , ToastAndroid.SHORT);

  }

  render(){
    return(
      <View style = {styles.content} >
        <TextInput style = {styles.inputText}
          placeholder = {"IP"}
          onChangeText = {(ip) => this.setState({ ip })}
          value = {this.state.ip} 
        />
        <TextInput style = {styles.inputText} 
          placeholder = {"Port:"}
          onChangeText = {(port) => this.setState({ port })}
          value = {this.state.port} 
        />
        <Button 
          title = "Connect"
          onPress = {this.handleClick}
        />
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText:{
    paddingLeft: "3%",
    width: "80%",
    height: 40,
    marginVertical: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  
  });