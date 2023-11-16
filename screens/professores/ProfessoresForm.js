import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const ProfessoresForm = ({navigation, route}) => {

    const professores = route.params?.professores || {}
    const id = route.params?.id

    const [dados, setDados] = useState(professores)

    function handleChage(valor, campo) {
        setDados({ ...dados, [campo]: valor })
    }

    function salvar() {

        AsyncStorage.getItem('professores').then(resultado => {
      
            const professores = JSON.parse(resultado) || []
            
            if(id >= 0){
              professores.splice(id, 1, dados)
            } else {
              professores.push(dados)
            }
      
            AsyncStorage.setItem('professores', JSON.stringify(professores))
        
            navigation.goBack()
          })
    }
    return (
        <>
            <ScrollView style={{ margin: 10 }}>
                <Text>Formulários dos Alunos</Text>

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='Id'
                    value={dados.id}
                    onChangeText={(valor) => handleChage(valor, 'id')}
                />

                <TextInput
                    tyle={{ marginTop: 10 }}
                    mode='outlined'
                    label='Nome'
                    value={dados.nome}
                    keyboardType='decimal-pad'
                    onChangeText={(valor) => handleChage(valor, 'nome')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='CPF'
                    value={dados.cpf}
                    onChangeText={(valor) => handleChage(valor, 'CPF')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='Maricula'
                    value={dados.matricula}
                    onChangeText={(valor) => handleChage(valor, 'Maricula')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='Salario'
                    value={dados.salario}
                    onChangeText={(valor) => handleChage(valor, 'Salario')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='E-mail'
                    value={dados.email}
                    onChangeText={(valor) => handleChage(valor, 'E-mail')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='Telefone'
                    value={dados.telefone}
                    onChangeText={(valor) => handleChage(valor, 'Telefone')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='CEP'
                    value={dados.cep}
                    onChangeText={(valor) => handleChage(valor, 'CEP')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='logradouro'
                    value={dados.logradouro}
                    onChangeText={(valor) => handleChage(valor, 'logradouro')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='Complemento'
                    value={dados.complemento}
                    onChangeText={(valor) => handleChage(valor, 'Complemento')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='Número'
                    value={dados.numero}
                    onChangeText={(valor) => handleChage(valor, 'Número')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='Bairro'
                    value={dados.bairro}
                    onChangeText={(valor) => handleChage(valor, 'Bairro')} />
                <Button onPress={salvar}>Salvar</Button>
            </ScrollView>
        </>
    )
}

export default ProfessoresForm
