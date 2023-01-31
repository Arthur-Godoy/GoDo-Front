import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {IoFlag} from 'react-icons/io5'

const Task = (props) => {
    const [late, setLate] = useState(false);

    useEffect(() =>{
        let date = props.date
        date = date.split('-')
        let taskDate = new window.Date(date[2], date[1] - 1, date[0])
        setLate(new window.Date()  > taskDate)
    },[props])

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
        display: inline;
        color: ${late ? "#fa0000" : "#02cf69"};
        font-size: 13px;
    `;

    const Date = styled.p`
        display: inline;
        color: ${late ? "#fa0000" : "#b3afaf"};
        text-align: right;
        font-size: 13px;
    `;

    const Details = styled.div`
        margin: 5px 5px 0px 5px;
        display: flex;
        justify-content: space-between;
    `;

    return (
        <Container>
            <input type="checkbox" name={props.name} style={{marginRight: 15}}/>
            <label for={props.name}>{props.name}</label>
            <Details>
                <DeadLine>
                    <IoFlag /> 
                    {late? 'Atrasado': 'No Prazo'}
                </DeadLine>
                <Date>{props.date}</Date>
            </Details>
        </Container>
    )
}

export default Task