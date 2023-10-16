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
              <Stack.Screen name="Alunos" component={Alunos} options={{ title: 'Alunos' }} />
              <Stack.Screen name="AlunosForm" component={AlunosForm} options={{ title: 'Alunos' }} />
            </Stack.Navigator>
        </>
    )
}

export default AlunosStack