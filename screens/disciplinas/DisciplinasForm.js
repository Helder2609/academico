import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const AlunosForm = ({ navigation, route }) => {

    const disciplina = route.params?.disciplina || {}
    const id = route.params?.id

    const [dados, setDados] = useState(disciplina)

    function handleChage(valor, campo) {
        setDados({ ...dados, [campo]: valor })
    }

    function salvar() {

        AsyncStorage.getItem('disciplinas').then(resultado => {

            const disciplinas = JSON.parse(resultado) || []

            if (id >= 0) {
                disciplinas.splice(id, 1, dados)
            } else {
                disciplinas.push(dados)
            }

            AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas))

            navigation.goBack()
        })
    }
    return (
        <>
            <ScrollView style={{ margin: 10 }}>
                <Text>Formulários da disciplina</Text>

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
                    onChangeText={(valor) => handleChage(valor, 'duracao')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='Curso id'
                    value={dados.curso}
                    onChangeText={(valor) => handleChage(valor, 'Curso id')} />
                <Button onPress={salvar}>Salvar</Button>
            </ScrollView>
        </>
    )
}

export default AlunosForm
