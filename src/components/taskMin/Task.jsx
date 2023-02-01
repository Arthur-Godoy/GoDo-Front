import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {IoFlag} from 'react-icons/io5'

    const Container = styled.div`
        padding: 10px; 
        background-color: white;
        border-radius: 10px;
        box-shadow: 8px 8px 10px #dddada;
        margin: 1% 1.3%;
        width: 28%;
        &:hover{
            background-color: #f9f4fd;
            transition: .8s;
        }
    `;

    const DeadLine = styled.p`
        color: ${ props => props.late ? "#fa0000" : "#02cf69"};
    `;

    const Date = styled.p`
        color: ${ props => props.late ? "#fa0000" : "#b3afaf"};
    `;

    const Details = styled.div`
        font-size: 13px;
        margin: 5px 5px 0px 5px;
        display: flex;
        justify-content: space-between;
    `;

function TaskMin({task, handleOpen, changeModalTask}) {
    const [late, setLate] = useState(false);

    useEffect(() => {
        let date = task.finishDate;
        date = date.split('-');
        let taskDate = new window.Date(date[0], date[1] - 1, date[2]);
        setLate(new window.Date() > taskDate);
    }, [task]);

    return (
        <Container
            onClick={() => {
                task.late = late;
                changeModalTask(task);
                handleOpen();
            } }>
            <input type="checkbox" name={task.id} style={{ marginRight: 15 }} />
            <label htmlFor={task.id}>{task.name}</label>
            {late ? (
                <Details>
                    <DeadLine late>
                        <IoFlag /> Atrasado
                    </DeadLine>
                    <Date late>{task.finishDate}</Date>
                </Details>
            ) : (
                <Details>
                    <DeadLine>
                        <IoFlag /> No Prazo
                    </DeadLine>
                    <Date>{task.finishDate}</Date>
                </Details>
            )}
        </Container>
    );
}

export default TaskMin