import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const ProfessoresForm = () => {

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
                    label='CPF'
                    value={dados.cpf}
                    onChangeText={(valor) => handleChage(valor, 'modalidade')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='Maricula'
                    value={dados.matricula}
                    onChangeText={(valor) => handleChage(valor, 'modalidade')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='Salario'
                    value={dados.salario}
                    onChangeText={(valor) => handleChage(valor, 'modalidade')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='E-mail'
                    value={dados.email}
                    onChangeText={(valor) => handleChage(valor, 'modalidade')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='Telefone'
                    value={dados.telefone}
                    onChangeText={(valor) => handleChage(valor, 'modalidade')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='CEP'
                    value={dados.cep}
                    onChangeText={(valor) => handleChage(valor, 'modalidade')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='logradouro'
                    value={dados.logradouro}
                    onChangeText={(valor) => handleChage(valor, 'modalidade')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='Complemento'
                    value={dados.complemento}
                    onChangeText={(valor) => handleChage(valor, 'modalidade')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='Número'
                    value={dados.numero}
                    onChangeText={(valor) => handleChage(valor, 'modalidade')} />

                <TextInput
                    style={{ marginTop: 10 }}
                    mode='outlined'
                    label='Bairro'
                    value={dados.bairro}
                    onChangeText={(valor) => handleChage(valor, 'modalidade')} />
                <Button onPress={salvar}>Salvar</Button>
            </ScrollView>
        </>
    )
}

export default ProfessoresForm
