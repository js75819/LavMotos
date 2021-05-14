import React, { useState } from 'react';
import {
  View,
  Text,StyleSheet, ImageBackground
} from 'react-native';
import Button from "../../component/Button";
import TextInput from "../../component/TextInput";
import Background from "../../component/Background";
import { useNavigation } from '@react-navigation/native';


//TELA DE INICIO ↓
export default () => {
  const navigation = useNavigation();
  const [email,setEmail] = useState("");
  const [nome,setNome] = useState("");
  const [telefone,setTelefone] = useState("");
  const [cpf,setCpf] = useState("");
  const [senha,setSenha] = useState("");

  return(
    <View style={styles.principal} >
       <ImageBackground style={styles.image} source={require('../../../src/assets/lavmotos.jpg')} >
    <Background>
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
      placeholder="Digite seu nome"
      value={nome}
      onChangeText={setNome}
      title="Nome"
      autoCapitalize="none"
      autoCorrect={false}
      />
      <TextInput
      placeholder="Ex: 11-999999999 "
      value={telefone}
      onChangeText={setTelefone}
      title="Telefone"
      autoCapitalize="none"
      autoCorrect={false}
      />
      <TextInput
      placeholder="Digite seu CPF"
      value={cpf}
      onChangeText={setCpf}
      title="CPF"
      autoCapitalize="none"
      autoCorrect={false}
      />
      <TextInput
      placeholder="********"
      onChangeText={setSenha}
      value={senha}
      title="Senha"
      secureTextEntry
      />
      <Button 
      title="FINALIZAR"
      onPress={()=>alert("Cdastro realizado com sucesso!")}
      style={{marginBottom:10,marginTop:10}}
      />
      </View>
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text onPress={()=>navigation.navigate("Login")} style={{fontSize:18}}>Já sou cadastrado</Text>
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
  }

});