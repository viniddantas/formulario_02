import React, { useEffect, useState } from 'react'
import DadosPessoais from './DadosPessoais'
import DadosUsuarios from './DadosUsuario'
import DadosEntrega from './DadosEntrega'
import { Step, StepLabel, Stepper, Typography } from '@mui/material'

function FormularioCadastro({ aoEnviar }) {
    
    const [etapaAtual, setEtapaAtual] = useState(0)
    const [dadosColetados, setDadosColetados] = useState({})
    
    useEffect(() => {
        if(etapaAtual === formularios.length-1){
            aoEnviar(dadosColetados)
        }
    })
    
    const formularios = [
        <DadosUsuarios aoEnviar={coletarDados}/>,
        <DadosPessoais aoEnviar={coletarDados}/>, 
        <DadosEntrega aoEnviar={coletarDados}/>,
        <Typography variant="h5">Obrigado pelo cadastro</Typography>
    ]

    function coletarDados(dados) {
        setDadosColetados({...dadosColetados, ...dados})
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1)
    }

    return ( 
        <>                
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formularios[etapaAtual]}
        </>
    )
}

export default FormularioCadastro