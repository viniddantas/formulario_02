import React, { useContext, useState } from 'react'
import { Button, TextField } from "@mui/material"
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuarios({aoEnviar}) {
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes)

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if(possoEnviar()) {
                aoEnviar({email, senha})
            }
            
        }}>
            <TextField 
                name="email"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value )
                }}
                id="email" 
                label="email" 
                margin="normal" 
                required
                type="email" 
                variant="outlined" 
                fullWidth
            />
            <TextField 
                name="senha"
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value )
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha" 
                label="senha" 
                margin="normal" 
                required
                type="password"
                variant="outlined" 
                fullWidth
            />

            <Button type="submit" variant="contained">Proximo</Button>
        </form>
    )
}

export default DadosUsuarios