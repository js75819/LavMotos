import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';

export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Motor Lavagens a seco'
 })

 return (
   <ScrollView style={styles.container}>
       <Image
       source={require('../../assets/detail.png')}
       style={styles.image}
       resizeMode="cover"
       />

       <View>
         <View>
           <Text style={[styles.title, { fontSize: 24 } ]}>R$ 20,90</Text>
         </View>
         <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 30 } ]}>MOTOR LAVAGENS A SECO</Text>
         </View>

         <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
         </View>

         <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#FFF" >15/06/2021  15:00</SizeButton>
            <SizeButton>15/06/2021  17:00</SizeButton>
            <SizeButton>16/06/2021  15:00</SizeButton>
            <SizeButton>17/06/2021  15:00</SizeButton>
          </ScrollView>
         </View>

         <View style={styles.textContent}>
         
          <Text style={styles.textContent}>
            O Motor lavagens a seco é uma equipe que traz qualidade e perfeição em suas lavagens e serviços, para garantir uma boa aparência em sua moto. São utilizados os melhores produtos para deixar a sua moto brilhando.
          </Text>
         
          
         </View>

        <Button/>

        <View style={styles.line} />

        <Footer/>

       </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    
  },
  title:{
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
});