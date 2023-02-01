import React from 'react'
import styled from 'styled-components';
import {IoPencil, IoTrash, IoFlag} from 'react-icons/io5'

const Container = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 500px;
    padding: 15px 30px;
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
    font-size: 15px;
    display: flex;
    justify-content: space-between;
`;

const TaskOpen = ({task, deleteTask}) => {
  return (
        <Container>
            <TopTitleContainer>
            <Title>{task.name}</Title>
            <div>
                <IconButton><IoPencil /></IconButton>
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
            {task.late?(
                <Details>
                    <DeadLine late>
                        <IoFlag /> Atrasado
                    </DeadLine>
                    <Date late>{task.finishDate}</Date>
                </Details>
            ):(
            <Details>
                <DeadLine>
                    <IoFlag /> No Prazo
                </DeadLine>
                <Date>{task.finishDate}</Date>
            </Details>
            )}
            
        </Container>
  )
}

export default TaskOpen