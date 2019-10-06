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

  listToDo = [
    'work',
    'swim',
    'study',
    'sleep',
    'run'
  ]

  render(){
    return(
      <View style={styles.container}>
        <LinearGradient colors={["#EAECC6", "#2BC0E4"]} style={styles.container}>
        <View>
        {this.listToDo.map((el, index)=>{
          return(
            <View style={[styles.borderBtm]}>
              <Text key={index}>{el}</Text>
            </View>
          )
        })}
        <Button onPress={this.onPressSubmit} title="Test"></Button>
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
    }
  }
)