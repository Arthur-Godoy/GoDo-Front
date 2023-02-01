import React,{useState} from 'react'
import styled from 'styled-components';
import {IoPencil, IoTrash, IoFlag} from 'react-icons/io5'
import { Modal } from '@mui/material';
import EditTask from './../editTask/EditTask';

const Container = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 500px;
    padding: 30px 30px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
`;

const Title = styled.h1`
    font-size: 30px;
    margin-top: 0px;
`;

const TopTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
`;

const IconButton= styled.button`
    font-size: 20px;
    padding: 5px 10px 3px 10px;
    border: none;
    border-radius: 10px;
    background-color: ${ props => props.delete ? '#fd3e3e' : '#3abd3a'};
    &:first-of-type{
        margin-right: 5px;
    }
    &:hover{
        background-color: ${ props => props.delete ? '#a30000' : '#018301'};
        transition: .3s;
    }
`;

const DeadLine = styled.p`
    color: ${ props => props.late ? "#fa0000" : "#02cf69"};
`;

const Date = styled.p`
    color: ${ props => props.late ? "#fa0000" : "#b3afaf"};
`;

const Details = styled.div`
    margin-top: 90px;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
`;

const ConcludedButton = styled.button`
    color: white;
    border: none;
    border-radius: 50px;
    padding: 10px;
    background-color: #4bd721;
    &:hover{
        background-color: #83f06d;
        transition: 0.4s;
    }
`;

const TaskOpen = ({task, deleteTask, updateTask, concludeTask}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () =>{setOpen(true)};
    const handleClose = () =>{setOpen(false)};
    return (
        <Container>
            <TopTitleContainer>
            <Title>{task.name}</Title>
            <div>
                <IconButton
                    onClick={()=>{
                        handleOpen()
                    }}
                >
                    <IoPencil />
                </IconButton>
                <IconButton 
                    onClick={()=>{
                        deleteTask(task.id)
                    }} 
                    delete
                >
                    <IoTrash />
                </IconButton>
            </div>
            </TopTitleContainer>
            <p>{task.description}</p>
            <Details>
                {task.late?(
                    <DeadLine late>
                        <IoFlag /> Atrasado
                    </DeadLine>
                ):(
                    <DeadLine>
                        <IoFlag /> No Prazo
                    </DeadLine>
                )}
                <ConcludedButton 
                    onClick={()=>{
                        let request ={
                            id: task.id,
                            name: task.name,
                            description: task.description,
                            date: task.finishDate,
                            concluded: task.concluded === 0 ? (1):(0)
                        }
                        concludeTask(request)
                    }}
                >
                    {task.concluded === 0 ? ('Marcar Como Concluído'):('Marcar como Pendente')}
                </ConcludedButton>
                <Date late>{task.finishDate}</Date>
            </Details>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <EditTask updateTask={updateTask} task={task}/>
            </Modal>
        </Container>
    )
}

export default TaskOpen