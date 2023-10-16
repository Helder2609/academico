import React from 'react';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Alunos = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text>ALunos</Text>
      <Button icon='plus'
        mode=
        'contained'
        onPress={() => navigation.push('AlunosForm')}
      >Novo </Button>
    </>
  );
}

export default Alunos;