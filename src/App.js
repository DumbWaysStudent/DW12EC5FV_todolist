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
      placeHoler : "Test",
      listToDo : [
        'work',
        'swim',
        'study',
        'sleep',
        'run'
      ]
    }
  }

  // listToDo = [
    // 'work',
    // 'swim',
    // 'study',
    // 'sleep',
    // 'run'
  // ]

  addOnClick = () => {
    this.state.listToDo.push("alpha");
    alert(this.state.listToDo.toString())
  }

  listItem = () => {
    return this.state.listToDo.map((el, index) => {
      return <Text key={index} >{el}</Text>
    })
  }

  
  render(){
    return(
      <View style={styles.container}>
        <LinearGradient colors={["#EAECC6", "#2BC0E4"]} style={styles.container}>
          <View style={styles.inputFeald}>
            <TextInput style={styles.inputBar}></TextInput>
            <Button title="add" style={styles.Btn}></Button>
          </View>
          <View style={styles.content}>
            <this.listItem />
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

    content : {
      flex : 17,
      marginTop : 10,
      marginLeft : 10,
    },

    inputFeald : {
      flex : 1,
      flexDirection : "row",
      margin : 5,
      alignItems : "center",
      justifyContent : "center",
    },

    inputBtn : {
      flex : 5,
    },

    inputBar : {
      flex : 5,
      borderStyle : "solid",
      borderWidth : 1,
      marginRight : 3,
    }
  }
)