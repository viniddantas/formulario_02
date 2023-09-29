import { Button, FormControlLabel, Switch, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

function FormularioCadastro({ aoEnviar, validarCPF, validarNome }) {
    
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)
    const [errosCPF, setErrosCPF] = useState({cpf:{valido: true, texto:""}})
    const [errosNome, setErrosNome] = useState({nome:{valido: true, texto:""}})
    const [errosSobrenome, setErrosSobrenome] = useState({nome:{valido: true, texto:""}})

    return (    
        <form onSubmit={(event) => {
                event.preventDefault()
                aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
            }}
        >
            <TextField 
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value)
                }}
                onBlur={() => {
                    const ehValido = validarNome(nome) 
                    setErrosNome({nome: ehValido})
                }}
                error={!errosNome.nome.valido}
                helperText={errosNome.nome.texto}
                id="nome" 
                label="Nome" 
                variant="outlined" 
                margin="normal" 
                fullWidth
            />
            
            <TextField 
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value)
                }}
                onBlur={() => {
                    const ehValido = validarNome(nome) 
                    setErrosSobrenome({nome: ehValido})
                }}
                error={!errosSobrenome.nome.valido}
                helperText={errosSobrenome.nome.texto}
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                margin="normal" 
                fullWidth
            />

            <TextField 
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value)
                }}
                onBlur={() => {
                    const ehValido = validarCPF(cpf)
                    setErrosCPF({cpf: ehValido})
                }}
                error={!errosCPF.cpf.valido}
                helperText={errosCPF.cpf.texto}
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                margin="normal" 
                fullWidth
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
            

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro