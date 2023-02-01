import { TextField} from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

const EditTaskContainer = styled.div`
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
    &:hover{
        background-color: #6137dd;
        transition: 0.4s;
    }
`;

const EditTask = ({task, updateTask}) => {
    const [name, setName] = useState(task.name);
    const [description, setDescription] = useState(task.description);
    const [date, setDate] = useState(task.finishDate);
    const [number, setNumber] = useState(0);

    return (
        <EditTaskContainer>
            <Title>Editando a Tarefa: {task.title}</Title>
            <InputContainer>
                <TextField 
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    required 
                    id='name' 
                    label="Nome" 
                    variant='outlined' 
                    value={name}
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
                    value={description}
                    margin="normal"
                />
            </InputContainer>
            <ButtonSubmmit 
                onClick={()=>{
                    if(name !== task.name || description !== task.description){
                        let editedTask = {
                            id: task.id,
                            name: name,
                            description: description,
                            finishDate: date,
                            concluded: 0,
                        }
                        updateTask(editedTask)
                    }
                }}
            >
                Enviar
            </ButtonSubmmit>
        </EditTaskContainer>
    )
}

export default EditTask