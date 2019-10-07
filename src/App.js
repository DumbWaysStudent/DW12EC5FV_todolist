/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {View, Text, StyleSheet, Button, TextInput, CheckBox} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class TaskOne extends Component {

  constructor(){
    super();
    this.state = {
      placeHolder : "",
      isDone : [
        false,
        false,
        false,
        false,
        false
      ],
      listToDo : [
        'work',
        'swim',
        'study',
        'sleep',
        'run'
      ]
    }
  }

  // Fungsi Di bawah ini digunakan untuk menambahkan text kedalam list listTodo
  // setState digunakan agar render() kembali berjalan
  addOnClick = () => {
    this.state.listToDo.push(this.state.placeHolder)
    this.state.isDone.push(false)
    this.setState({
      listToDo : this.state.listToDo,
      isDone : this.state.isDone,
      placeHolder :"",
    })
  }

  // Fungsi di bawah akan merubahan state placeHolder sesuai ketikan user
  handleTextInput = (text) => {
    this.setState({
      placeHolder : text
    })
  }

  // Fungsi di bawah digunakan untuk membuat saat icon FontAwesome5 di klik akan mendelet sesuai dengan index
  // yang di passing saat map
  handleDeletIcon = (index) => {
    this.state.listToDo.splice(index, 1)
    this.state.isDone.splice(index, 1)
    this.setState({
      listToDo : this.state.listToDo,
      isDone : this.state.isDone
    })
  }

  // Fungs ini bawah ini digunakan untuk merubah state dari checkbox dimana akan digunakan oleh value checkbox
  handleCheckBox = (index) => {
    const checkedBox = this.state.isDone
    checkedBox[index] ? checkedBox.splice(index, 1, false) : checkedBox.splice(index, 1, true)

    this.setState({
      isDone : checkedBox
    })
  }

  // Fungsi di bawah digunakan untuk mereturn component <View>, <Text> dan <FontAwsome5> dimana <Text> berisi element array dengan map
  listItem = () => {
    return this.state.listToDo.map((el, idx) => {
      return (
        <View style={[styles.borderBtm, styles.textContent]}>
          <View style={{flexDirection : "row",}}>
            <CheckBox onValueChange={() => this.handleCheckBox(idx)} value={this.state.isDone[idx]}></CheckBox>
            <Text key={idx} style={styles.textSize}>{el}</Text>
          </View>
          <FontAwesome5 name="trash" size={18} color="#f7113b" onPress={() => this.handleDeletIcon(idx)}/>
        </View>
        )
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

    textContent : {
      marginHorizontal : 10,
      flexDirection : 'row',
      justifyContent : 'space-between'
    },

    textSize : {
      fontSize : 18,
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
    },

    done : {
      color : 'grey'
    }
  }
)