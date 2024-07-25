import React, {useState, useEffect} from 'react'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {produtos} from "../produtos"

export default function Form() {
    const [item, setItem] = useState("");
    const [quantidade, setQuantidade] = useState("");
    
    const buscarItem = (e) =>{
        console.log(e, "Buscando...")
        setItem(e)
        const item = produtos.filter((item) => item.nome.includes(e.toString()))
        console.log(item[0])
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label="Item"
                variant="outlined"
                value={item} 
                onChange = {(e) => buscarItem(e.target.value)}/>

            <TextField
                id="outlined-basic"
                label="Quantidade"
                variant="outlined"
                value={quantidade} />

        </Box>
    );
}
