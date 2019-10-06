/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LinearGradient from 'react-native-linear-gradient';

const App: () => React$Node = () => {
  let listToDo = [
    'work',
    'swim',
    'study',
    'sleep',
    'run'
  ]

  return(
    <View style={styles.container}>
      <LinearGradient colors={["#EAECC6", "#2BC0E4"]} style={styles.container}>
      <View>
      {listToDo.map((el, index)=>{
        return(
          <View style={[styles.borderBtm]}>
            <Text key={index}>{el}</Text>
          </View>
        )
      })}
      </View>
      </LinearGradient>
    </View>
  )
};

export default App;

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