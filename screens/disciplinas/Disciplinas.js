import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, MD3DarkTheme, Portal, Text } from 'react-native-paper'

const Disciplinas = ({ navigation }) => {

  const [disciplinas, setdisciplinas] = useState([])
  const [idExcluir, setIdExcluir] = useState(0)

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useFocusEffect(
    React.useCallback(() => {
      carregarDados()
    }, [])
  );

  function carregarDados() {
    AsyncStorage.getItem('disciplinas').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setdisciplinas(resultado)
    })
  }

  function confirmarExclusao(id) {
    setIdExcluir(id)
    setVisible(true)
  }

  function excluir() {
    disciplinas.splice(idExcluir, 1)
    AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    carregarDados()
    setVisible(false)
  }

  return (
    <>
    <ScrollView style={{ padding: 15 }}>

        {disciplinas.map((item, i) => (
          <Card key={i} mode='outlined' style={{ marginBottom: 10 }}>
            <Card.Content>
              <Text variant="titleLarge">{item.nome}</Text>
              <Text variant="bodyMedium">id: {item.id}</Text>
              <Text variant="bodyMedium">Curso: {item.Curso}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton 
                icon='pencil-outline' 
                onPress={() => navigation.push('Disciplinas-Form', {id: i, disciplinas: item})}
              />
              <IconButton
                icon='trash-can-outline'
                onPress={() => confirmarExclusao(i)}
              />
            </Card.Actions>
          </Card>
        ))}

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Content>
              <Text variant="bodyMedium">Deseja realmente excluir o registro?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={excluir}>Sim</Button>
              <Button onPress={hideDialog}>Não</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

      </ScrollView>

      <FAB
        icon="plus"
        size='small'
        style={{ position: 'absolute', right: 10, bottom: 10 }}
        onPress={() => navigation.push('Disciplinas-Form')}
      />

    </>
  )
}

export default Disciplinas