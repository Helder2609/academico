import React from 'react'
import { Text } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Alunos from './Alunos';
import AlunosForm from './AlunosForm';

const Stack = createNativeStackNavigator();


const AlunosStack = () => {
    return (
        <>
            <Stack.Navigator>
              <Stack.Screen name="Alunos" component={Alunos} options={{ title: 'Cursos' }} />
              <Stack.Screen name="Alunos-Form" component={AlunosForm} options={{ title: 'Cursos' }} />
            </Stack.Navigator>
        </>
    )
}

export default AlunosStack