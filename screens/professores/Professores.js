import React from 'react';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Professores = () => {
  const navigation = useNavigation();
  return (
    <>
      <Text>Professores</Text>
      <Button icon='plus'
        mode=
        'contained'
        onPress={() => navigation.push('Professores-Form')}
      >Novo </Button>
    </>
  )
}

export default Professores