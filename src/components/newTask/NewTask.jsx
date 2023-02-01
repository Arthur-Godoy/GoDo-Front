import { TextField} from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

const NewTaskContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 500px;
    max-height: 95vh;
    padding: 15px 30px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    overflow-y: auto;
`;

const InputContainer = styled.div`
    padding: 0px 30px;
`;

const Title = styled.h1`
    font-size: 30px;
`;

const ButtonSubmmit = styled.button`
    margin-top: 40px;
    width: 440px;
    margin-left: 30px;
    margin-right: 30px;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 10px;
    background-color: #4f21d7;
`;

const NewTask = ({storeTask}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new window.Date());
    const [number, setNumber] = useState(0);
    let descriptionText = "Um café é sempre ótimo para começar o dia com o pé Direito !!, Tenho que fazer esse café para conseguir arcodar e me manter ativo no resto do meu dia"
    
    const getFinishDate = (operation) =>{
        let tempDate = date;
        let acrescentOrNot = operation ? 1 : -1;
        tempDate.setDate(tempDate.getDate() + acrescentOrNot);
        setDate(tempDate);
    }

    const formatDate = (tempDate) =>{
        let day = tempDate.getDate();
        let month = tempDate.getMonth() + 1;
        let year = tempDate.getFullYear();

        return (year+'-'+month+'-'+day)
    }

    return (
        <NewTaskContainer>
            <Title>Criar Nova Tarefa</Title>
            <InputContainer>
                <TextField 
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    required 
                    id='name' 
                    label="Nome" 
                    variant='outlined' 
                    placeholder='Fazer Café'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
                <TextField
                    onChange={(e) => setDescription(e.target.value)}
                    id="description"
                    label="Descrição"
                    multiline
                    required
                    fullWidth
                    rows={10}
                    placeholder={descriptionText}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    onChange={(e) => {
                        let componentNum = e.target.value;
                        getFinishDate(number < componentNum);
                        setNumber(componentNum);
                    }}
                    fullWidth
                    required
                    margin='normal'
                    id="outlined-number"
                    label="Prazo em Dias"
                    type="number"
                    placeholder='1'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </InputContainer>
            <ButtonSubmmit 
                onClick={()=>{
                    let task = {
                        name: name,
                        description: description,
                        finishDate: formatDate(date),
                        concluded: 0,
                    }
                    storeTask(task)
                }}
            >
                Enviar
            </ButtonSubmmit>
        </NewTaskContainer>
    )
}

export default NewTask