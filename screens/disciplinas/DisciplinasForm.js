import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const AlunosForm = () => {

    const [dados, setDados] = useState({})

    function handleChage(valor, campo) {
        setDados({ ...dados, [campo]: valor })
    }

    function salvar() {
        console.log(dados)
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
                    onChangeText={(valor) => handleChage(valor, 'nome')}
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
                    label='Curso'
                    value={dados.curso}
                    onChangeText={(valor) => handleChage(valor, 'modalidade')} />
                <Button onPress={salvar}>Salvar</Button>
            </ScrollView>
        </>
    )
}

export default AlunosForm
