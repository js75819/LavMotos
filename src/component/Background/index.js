import React from 'react';
import { View,StyleSheet,ScrollView,Dimensions,SafeAreaView} from 'react-native';


const Background = (props) => {
  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView style={style.container}>
    <View style={{
        flex: 1,
        paddingBottom: 20,
        minHeight : Dimensions.get("window").height/1.2
      }}>
        {props.children}
        </View>
    </ScrollView>
      </SafeAreaView>
  )
}

export default Background;

const style = StyleSheet.create({
    container: {
      flex:1,
      paddingBottom : 20
    },
  })
  