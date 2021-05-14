import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,ImageBackground
} from 'react-native';
import Button from "../../component/Button";
import { useNavigation } from '@react-navigation/native';


//TELA DE INICIO ↓
export default () => {
  const navigation = useNavigation();
  return(
    <View style={styles.principal}>
       <ImageBackground style={styles.image} source={require('../../../src/assets/lavmotos.jpg')} >
    <View style={styles.container}>

      <Button style={styles.botao}
      title="Criar sua conta no LavMotos"
      onPress={()=>navigation.navigate("CadastroScreen")}
      style={{marginBottom:20}}
      />
      <Button style={styles.botao}
      title="Já sou cadastrado"
      onPress={()=>navigation.navigate("Login")}
      />
      
    </View>
    </ImageBackground>
    </View>
  )
}

//CONFIGURAÇÕES DE ESTILO (APARENCIA) ↓
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems:"center",
    justifyContent: "center"
    
  },
  principal: {
    flex: 1,
    flexDirection: "column",
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  botao: {
    color:'green'

  }
});





