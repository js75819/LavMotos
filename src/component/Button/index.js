import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Button(props) {
 return (
   <View style={[{...props.style}]}>
       <TouchableOpacity onPress={props.onPress} style={styles.btnContainer}>
           <Text style={styles.title}>{props.title}</Text>
       </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    btnContainer:{
        minWidth: '80%',
        maxWidth : "80%",
        height: 50,
        backgroundColor: '#17181a',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 17,
        color: '#FFF'
    }
});