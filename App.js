import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Cursos from './screens/cursos/Cursos';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Alunos from './screens/alunos/Alunos';
import Disciplinas from './screens/disciplinas/Disciplinas';
import Professores from './screens/professores/Professores';
import Modalidades from './screens/modalidade/Modalidades';
import CursoStack from './screens/cursos/CursoStack';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
           <Tab.Screen
              name="Cursos"
              component={CursoStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="bookshelf" size={26} />
                ),
              }}
            /> 
           <Tab.Screen
              name="Alunos"
              component={Alunos}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account" size={26} />
                ),
              }}
            /> 
           <Tab.Screen
              name="Disciplinas"
              component={Disciplinas}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="book-open-variant" size={26} />
                ),
              }}
            /> 
           <Tab.Screen
              name="Professores"
              component={Professores}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account-tie" size={26} />
                ),
              }}
            /> 
           <Tab.Screen
              name="Modalidades"
              component={Modalidades}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="google-classroom" size={26} />
                ),
              }}
            /> 
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}