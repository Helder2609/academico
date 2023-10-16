import React from 'react'
import { Text } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Professores from './Professores';
import ProfessoresForm from './ProfessoresForm';

const Stack = createNativeStackNavigator();


const ProfessoresStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="Professores" component={Professores} options={{ title: 'Professores' }} />
                <Stack.Screen name="Professores-Form" component={ProfessoresForm} options={{ title: 'Professores' }} />
            </Stack.Navigator>
        </>
    )
}

export default ProfessoresStack
