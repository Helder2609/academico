import React from 'react';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Disciplinas = () => {
  const navigation = useNavigation();
  return (
    <>
      <Text>Disciplinas</Text>
      <Button icon='plus'
        mode=
        'contained'
        onPress={() => navigation.push('Disciplinas-Form')}
      >Novo </Button>
    </>
  )
}

export default Disciplinas