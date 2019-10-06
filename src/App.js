/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

class TaskOne extends Component {

  constructor(){
    super();
    this.state = {
      placeHolder : "",
      listToDo : [
        'work',
        'swim',
        'study',
        'sleep',
        'run'
      ]
    }
  }

  addOnClick = () => {
    this.state.listToDo.push(this.state.placeHolder);
    this.setState({
      listToDo : this.state.listToDo,
      placeHolder :"",
    })
  }

  handleTextInput = (text) => {
    this.setState({
      placeHolder : text
    })
  }

  listItem = () => {
    return this.state.listToDo.map((el, index) => {
      return <Text key={index} style={[styles.borderBtm, styles.textContent]}>{el}</Text>
    })
  }
  
  render(){
    return(
      <View style={styles.container}>
        <LinearGradient colors={["#EAECC6", "#2BC0E4"]} style={styles.container}>
          <View style={styles.inputFeald}>
            <TextInput style={styles.inputBar} onChangeText={this.handleTextInput} value={this.state.placeHolder}></TextInput>
            <Button title="add" style={styles.Btn} onPress={this.addOnClick}></Button>
          </View>
          <View style={styles.content}>
            <View>
              <this.listItem />
            </View>
          </View>
        </LinearGradient>
      </View>
    )
  }
}
export default TaskOne;

const styles = StyleSheet.create(
  {
    container : {
      flex : 1,
    },

    borderBtm : {
      borderBottomColor : 'black',
      borderBottomWidth : 2,
      borderStyle: 'solid',
      marginBottom: 5,
    },

    textContent : {
      fontSize : 18,
      marginLeft : 10,
    },

    content : {
      flex : 14,
    },

    inputFeald : {
      flex : 1,
      flexDirection : "row",
      marginVertical : 15,
      marginHorizontal : 10,
      alignItems : "center",
      justifyContent : "center",
    },

    inputBtn : {
      flex : 5,
    },

    inputBar : {
      flex : 5,
      height : 40,
      borderStyle : "solid",
      borderWidth : 1,
      marginRight : 10,
    }
  }
)