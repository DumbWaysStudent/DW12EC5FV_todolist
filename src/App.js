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
      buttonState : 'Add',
      listToDo : [{
        name : 'work',
        isDone : false
      }, {
        name : 'swim',
        isDone : false
      }, {
        name : 'study',
        isDone : false
      }, {
        name : 'sleep',
        isDone : false
      }, {
        name : 'run',
        isDone : false
      }]
    }
  }
  
  // Fungsi Di bawah ini digunakan untuk menambahkan text kedalam list listTodo
  // setState digunakan agar render() kembali berjalan
  addOnClick = () => {
    const obj = {}
    obj['name'] = this.state.placeHolder
    obj['isDone'] = false
    this.state.listToDo.push(obj)
    this.setState({
      listToDo : this.state.listToDo,
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
    this.setState({
      listToDo : this.state.listToDo,
    })
  }

  // Fungs ini bawah ini digunakan untuk merubah state dari checkbox dimana akan digunakan oleh value checkbox
  handleCheckBox = (index) => {
    const checkedBox = this.state.listToDo
    checkedBox[index].isDone ? checkedBox[index].isDone = false : checkedBox[index].isDone = true

    this.setState({
      isDone : checkedBox
    })
  }

  // Fungsi yang digunakan saat icon edit di klik, untuk merubah state buttonState yang digunaan sebagai title button
  // dan di guakan untu kondisional apakah data di add atau di upate
  handleEdit = (index) => {
    this.setState({
      buttonState : "UPDATE",
      indexEdit : index,
      placeHolder : this.state.listToDo[index].name
    })
  }

  // digunakan untuk merubah state listToDo berdasarkan index yang sudah kita tentukan
  editButton = () => {
    this.state.listToDo[Number(this.state.indexEdit)].name = this.state.placeHolder
    this.setState({
      listToDo : this.state.listToDo,
      buttonState : "Add",
      placeHolder : "",
    })
  }

  randomKey = () => {
    let generateText = ""
    let charset = "abcdefghijklmnopqrstuvwxyz0123456789"

    for (var i = 0; i < 4; i++){
      generateText += charset[Math.floor(Math.random() * charset.length)]
    }
    return generateText
  }

    // Fungsi di bawah digunakan untuk mereturn component <View>, <Text> dan <FontAwsome5> dimana <Text> berisi element array dengan map
    listItem = () => {
      return this.state.listToDo.map((el, idx) => {
        return (
          <View style={[styles.borderBtm, styles.textContent]}>
            <View style={{flexDirection : "row",}}>
              <CheckBox onValueChange={() => this.handleCheckBox(idx)} value={this.state.listToDo[idx].isDone}></CheckBox>
              <Text key={idx} style={styles.textSize}>{el.name}</Text>
            </View>
            <View style={{flexDirection : "row", alignItems : 'center'}}>
              <FontAwesome5 name="pen" size={18} color="#000" onPress={() => this.handleEdit(idx)} style={{marginRight: 10}} />
              <FontAwesome5 name="trash" size={18} color="#f7113b" onPress={this.state.buttonState === 'Add' ? () => this.handleDeletIcon(idx) : null}/>
            </View>
          </View>
          )
      })
    }
  
  render(){
    return(
      <View style={styles.container}>
        <LinearGradient colors={["#EAECC6", "#2BC0E4"]} style={styles.container}>
          <View style={styles.inputFeald}>
            <TextInput style={styles.inputBar} onChangeText={this.handleTextInput} value={this.state.placeHolder} placeholder={"Type Here ..."}></TextInput>
            <Button title={this.state.buttonState} style={styles.inputBtn} onPress={this.state.buttonState == 'Add' ? this.addOnClick : this.editButton}></Button>
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
      backgroundColor : "#bbd3f2",
      borderColor : '#b8bbbf',
      borderWidth : 2,
      borderStyle: 'solid',
      marginHorizontal : 15,
      marginVertical : 5,
    },

    textContent : {
      padding : 10,
      flexDirection : 'row',
      justifyContent : 'space-between'
    },

    textSize : {
      fontSize : 24,
    },

    content : {
      flex : 14,
    },

    inputFeald : {
      backgroundColor : '#EAECC6',
      alignSelf: 'flex-start',
      flexDirection : "row",
      marginVertical : 15,
      marginHorizontal : 10,
      alignItems : "center",
      borderStyle : "solid",
      borderColor : "#abbbcf",
      borderWidth : 1,
      borderRadius : 90,
      paddingRight : 15,
      paddingLeft : 10,
      paddingVertical  : 5,
      height : 45,
    },

    inputBtn : {
      flex : 1,
      marginLeft : 50,
      height : 5,
    },

    inputBar : {
      flex: 1,
      height : 40,
      marginRight : 10,
    },

    done : {
      color : 'grey'
    }
  }
)