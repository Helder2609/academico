import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const AlunosForm = () => {

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
    <Text>Dados do Aluno</Text>
      
    <TextInput 
    style={{marginTop: 10}}
     mode='outlined'
      label='Nome'
      value={dados.nome}
      onChangeText={(valor) => handleChage(valor, 'nome')}
      />    
    </ScrollView>
    </>
  )
}

export default AlunosForm