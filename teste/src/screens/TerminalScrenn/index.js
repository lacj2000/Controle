
import React, {Component} from 'react';
import {Platform,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  View
  } from 'react-native';

import Terminalmsg from './Terminalmsg';

export default class TerminalScrenn extends Component {
  constructor(props){
    super(props);
    this.state = {
      new_msg:"",
      ip:"192.168.0.104",
      port:"5000",
      messages:[
        {type:"TX",msg:"hello" },
        {type:"TX",msg:"hello" },
        {type:"TX",msg:"hello" },
        {type:"TX",msg:"hello" },
        {type:"RX",msg:"how are you?"}
      ]
    };
  }
  
  render() {
    ToastAndroid.show(JSON.stringify(this.state) , ToastAndroid.SHORT);
    const {messages} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.containerScroll}>
          {/* <Terminalmsg message={"Hello World"} sender={"192.168.0.4"} type={"TX"}/> */}
          { messages.map((message, index)=>
            <Terminalmsg key={index} message={message.msg} type={message.type}/>)}     
        
        </ScrollView>
      </View>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: '#000',
    },
  containerScroll: {
    width: "100%",
  },
});
