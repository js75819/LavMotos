import React, { useState } from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { useUsuario } from "./hooks/login";
import AppRoutes from "./routes/AppRoutes";
import AuthRoutes from "./routes/AuthRoutes";

const Stack = createStackNavigator();

function Routes(){
    const { logged } = useUsuario();
    return logged ? <AppRoutes/> : <AuthRoutes/>
    
}

export default Routes;