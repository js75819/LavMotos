import React from 'react';
import { View,TextInput,StyleSheet,Text } from 'react-native';


const Input = (props) => {
  return (
      <View style={styles.containerInput}>
       <Text style={styles.title}>{props.title}</Text>
      <TextInput
      style={styles.textInput}
      placeholderTextColor={"#ccc"}
      {...props}

      />
      </View>
  )
}

export default Input;

const styles = StyleSheet.create({
    containerInput : {
        width: "80%",
        minWidth:"80%",
        maxWidth:"80%",
        alignSelf: "center",
        marginBottom : 10,
    },
    textInput : {
        backgroundColor: "#FFF",
        marginTop: 12,
        borderColor: "#000",
        width:"100%",
        height : 48,
        alignSelf: "center",
        paddingLeft: 10,
        fontSize : 18,
        backgroundColor: "rgba(255, 255, 255, 0.98)",
        borderWidth: 1,
        color : "#ccc",
        paddingLeft : 16,
    },
    title : {
        fontSize : 18,
        color : "#000",
    },

})
