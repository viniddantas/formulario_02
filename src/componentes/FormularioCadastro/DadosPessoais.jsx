import { Button, FormControlLabel, Switch, TextField } from '@mui/material'
import React from 'react'
import { useState, useContext } from 'react'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'
import useErros from '../../hooks/useErros'

function DadosPessoais({ aoEnviar }) {
    
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)
    const validacoes = useContext(ValidacoesCadastro) 
    const [erros, validarCampos, possoEnviar] = useErros(validacoes) 
    
    

    return (    
        <form onSubmit={(event) => {
                event.preventDefault()
                if(possoEnviar()) {
                    aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
                }
            }}
        >
            <TextField 
                name="nome"
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id="nome" 
                label="Nome" 
                variant="outlined" 
                margin="normal" 
                fullWidth
                required
            />
            
            <TextField 
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value)
                }}
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                margin="normal" 
                fullWidth
            />

            <TextField 
                name="cpf"
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                margin="normal" 
                fullWidth
                required
            />

            <FormControlLabel 
                label="Promoções" 
                control={
                    <Switch 
                        checked={promocoes}
                        onChange={(event) => {
                            setPromocoes(event.target.checked)
                        }}
                        name="Promoções" 
                    />
                }
            />
            <FormControlLabel 
                label="Novidades" 
                control={
                    <Switch 
                        checked={novidades}
                        onChange={(event) => {
                            setNovidades(event.target.checked)
                        }}
                        name="Novidades" 
                    />
                }
            />            

            <Button type="submit" variant="contained" color="primary">Proximo</Button>
        </form>
    )
}

export default DadosPessoais