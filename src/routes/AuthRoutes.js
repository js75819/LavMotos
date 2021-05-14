import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Initial from '../pages/Inicial/Inicio';
import CadastroScreen from '../pages/Inicial/CadastroScreen';
import Login from '../pages/Inicial/LoginScreen';
const Stack = createStackNavigator();

function Routes(){
        return(
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
                name="Initial"
                component={Initial}
                options={{ headerShown: false }}
                />
                 <Stack.Screen
                name="CadastroScreen"
                component={CadastroScreen}
                options={{ 
                    headerShown: true,
                    title:"",
                    headerTitle:"",
                    headerBackTitleVisible:false,
                    headerBackImage:false,
                    headerStyle:{backgroundColor:"#000"},
                    headerLeftContainerStyle:{marginLeft:20}}}
                />
                <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
                />
        </Stack.Navigator>
        </NavigationContainer>
        )
    
}

export default Routes;