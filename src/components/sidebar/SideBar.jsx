import React from 'react'
import styled from 'styled-components';
import { IoCalendar, IoCheckmarkDoneCircle, IoCalendarNumber, IoCalendarOutline } from 'react-icons/io5'

const Container = styled.div`
    background-color: white;
    padding: 10px 10px 0px 10px;
    height: calc(100vh - 10px);
    box-shadow: 10px 0 5px -5px #d6d6d6;
    margin: 0;
    margin-right: 5px;
`;

const List = styled.ul`
    list-style: none;
`;

const ListItem = styled.li`
    padding: 10px 0px;
    margin: 15px 0px;
`;

const Link = styled.a`
    font-size: 18px;
    text-decoration: none;
    color: black;
    &:hover{
      color: #6239da;
      transition: 0.3s;
    }
`;

const Icon = styled.span`
    font-size: 18px;
    margin-right: 3px;
`;

const Logo = styled.h1`
    margin-left: 20px;
    font-size: 25px;
    margin-bottom: 60px;
`;

const SideBar = () => {
    return (
        <Container>
            <Logo>
                <IoCalendarOutline /> GoDo!
            </Logo>
            <List>
                <ListItem>
                    <Link href=""> <Icon><IoCalendar/></Icon>  Todos</Link>
                </ListItem>
                <ListItem>
                    <Link href=""> <Icon><IoCalendarNumber/></Icon> À Fazer</Link>
                </ListItem>
                <ListItem>
                    <Link href=""> <Icon><IoCheckmarkDoneCircle/></Icon>  Concluídos</Link>
                </ListItem>
            </List>
        </Container>
    )
}

export default SideBar