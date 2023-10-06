import React from 'react'
import { Text } from 'react-native-paper'
import Cursos from './Cursos';
import CursosForm from './CursosForm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const CursoStack = () => {
    return (
        <>
            <Stack.Navigator>
              <Stack.Screen name="Cursos" component={Cursos} options={{ title: 'Cursos' }} />
              <Stack.Screen name="Cursos-Form" component={CursosForm} options={{ title: 'Cursos' }} />
            </Stack.Navigator>
        </>
    )
}

export default CursoStack