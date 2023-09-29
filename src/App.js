import { Component } from 'react';
import './App.css';
import FormularioCadastro from './componentes/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material';

import '@fontsource/roboto/';

 
class App extends Component {
    render (){
        return (
            <Container component="article" maxWidth="sm">
                <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography> 
                <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} validarNome={validarNome}/>
            </Container>
        )
    }
}

function aoEnviarForm(dados) {
    console.log(dados)
}


function validarNome(nome) {
    if(nome.length < 2) {
        return {valido: false, texto:"Digite o nome completo"}
    } else {
        return {valido: true, texto:""}
    }
}

function validarCPF(cpf) {
    if(cpf.length !== 11) {
        return {valido: false, texto:"O cpf deve ter 11 digitos"}
    } else {
        return {valido: true, texto:""}
    }
}

export default App;
