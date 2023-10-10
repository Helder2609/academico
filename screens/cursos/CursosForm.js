import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const CursosForm = () => {

  const[dados, setDados] = useState({})

  function handleChage(valor, campo){
setDados({...dados, [campo]: valor})
  }

  function salvar(){
    console.log(dados)
  }
  return (
    <>
    <ScrollView style={{margin: 10}}>
    <Text>Formulários do curso</Text>
      
    <TextInput 
    style={{marginTop: 10}}
     mode='outlined'
      label='Nome'
      value={dados.nome}
      onChangeText={(valor) => handleChage(valor, 'nome')}
      />

    <TextInput 
    tyle={{marginTop: 10}} 
    mode='outlined'
     label='Duração'
     value= {dados.duracao}
     keyboardType='decimal-pad'
     onChangeText={(valor) => handleChage(valor, 'duracao')}/>

    <TextInput 
    style={{marginTop: 10}} 
    mode='outlined' 
    label='Modalidade'
    value={dados.modalidade}
    onChangeText={(valor) => handleChage(valor, 'modalidade')}/>
    
    <Button onPress={salvar}>Salvar</Button>
    </ScrollView>
    </>
  )
}

export default CursosForm