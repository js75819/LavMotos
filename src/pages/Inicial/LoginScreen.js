import React, { useState } from 'react';
import {
  View,
  Text,StyleSheet, ImageBackground
} from 'react-native';
import Button from "../../component/Button";
import TextInput from "../../component/TextInput";
import Background from "../../component/Background";
import { useNavigation } from '@react-navigation/native';
import { useUsuario } from "../../hooks/login";



//TELA DE INICIO ↓
export default () => {
  const navigation = useNavigation();
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");
  const { logged,setLogged } = useUsuario();

  return(
    <View style={styles.principal} >
       <ImageBackground style={styles.image} source={require('../../../src/assets/lavmotos.jpg')} >
    <Background style={styles.container}>
      <View style={{flex:4,alignItems:"center",justifyContent:"center"}}>
      <TextInput
      placeholder="Ex: jose@gmail.com"
      value={email}
      onChangeText={setEmail}
      title="E-mail"
      autoCapitalize="none"
      autoCorrect={false}
      />
      <TextInput
      placeholder="********"
      value={senha}
      onChangeText={setSenha}
      title="Senha"
      secureTextEntry
      />
      <Button 
      title="ENTRAR"
      onPress={()=>setLogged(!logged)}     
      style={{marginBottom:10,marginTop:10}}
      />
      </View>
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text onPress={()=>navigation.navigate("CadastroScreen")} style={{fontSize:18}}>Quero me cadastrar</Text>
      </View>
    </Background>
    </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems:"center",
    justifyContent: "center",
    marginTop:200
    
  },
  principal: {
    flex: 1,
    flexDirection: "column",
    justifyContent:'center'
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }

});