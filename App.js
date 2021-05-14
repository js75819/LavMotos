import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { useFonts, Anton_400Regular} from '@expo-google-fonts/anton';
import { SafeAreaView } from "react-native";
import ProviderHooks from './src/hooks';

import Routes from './src/router';

export default function App() {

  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });


  if(!fontsLoaded){
    return <AppLoading />;
  }


  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar backgroundColor="#000" translucent={false} />
      <ProviderHooks>
       <Routes/>
      </ProviderHooks>
    </SafeAreaView>
  );
}