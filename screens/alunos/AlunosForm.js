import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const AlunosForm = ({navigation, route}) => {

  const alunos = route.params?.alunos || {}
  const id = route.params?.id

    const[dados, setDados] = useState(alunos)
    

  function handleChage(valor, campo){
setDados({...dados, [campo]: valor})
  }

  function salvar(){
    AsyncStorage.getItem('alunos').then(resultado => {
      
      const alunos = JSON.parse(resultado) || []
      
      if(id >= 0){
        alunos.splice(id, 1, dados)
      } else {
        alunos.push(dados)
      }

      AsyncStorage.setItem('alunos', JSON.stringify(alunos))
  
      navigation.goBack()
    })

  }
    return (
        <>
<ScrollView style={{margin: 10}}>
    <Text>Formulários dos Alunos</Text>
      
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
     label='CPF'
     value= {dados.cpf}
     keyboardType='decimal-pad'
     onChangeText={(valor) => handleChage(valor, 'duracao')}/>

    <TextInput 
    style={{marginTop: 10}} 
    mode='outlined' 
    label='Matricula'
    value={dados.matricula}
    onChangeText={(valor) => handleChage(valor, 'modalidade')}/>
    <TextInput 
    style={{marginTop: 10}} 
    mode='outlined' 
    label='Salario'
    value={dados.salario}
    onChangeText={(valor) => handleChage(valor, 'modalidade')}/>
    <TextInput 
    style={{marginTop: 10}} 
    mode='outlined' 
    label='E-mail'
    value={dados.email}
    onChangeText={(valor) => handleChage(valor, 'modalidade')}/>
    <TextInput 
    style={{marginTop: 10}} 
    mode='outlined' 
    label='Telefone'
    value={dados.telefone}
    onChangeText={(valor) => handleChage(valor, 'modalidade')}/>
    <TextInput 
    style={{marginTop: 10}} 
    mode='outlined' 
    label='Cep'
    value={dados.cep}
    onChangeText={(valor) => handleChage(valor, 'modalidade')}/>
    <TextInput 
    style={{marginTop: 10}} 
    mode='outlined' 
    label='Logradouro'
    value={dados.logradouro}
    onChangeText={(valor) => handleChage(valor, 'modalidade')}/>
    <TextInput 
    style={{marginTop: 10}} 
    mode='outlined' 
    label='Complemento'
    value={dados.complemento}
    onChangeText={(valor) => handleChage(valor, 'modalidade')}/>
    <TextInput 
    style={{marginTop: 10}} 
    mode='outlined' 
    label='Número'
    value={dados.numero}
    onChangeText={(valor) => handleChage(valor, 'modalidade')}/>
    <TextInput 
    style={{marginTop: 10}} 
    mode='outlined' 
    label='Bairro'
    value={dados.bairro}
    onChangeText={(valor) => handleChage(valor, 'modalidade')}/>
    
    <Button onPress={salvar}>Salvar</Button>
    </ScrollView>
        </>
    )
}

export default AlunosForm
