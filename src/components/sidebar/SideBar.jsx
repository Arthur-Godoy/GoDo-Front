import React from 'react'
import styled from 'styled-components';
import { IoCalendar, IoCheckmarkDoneCircle, IoCalendarNumber, IoCalendarOutline, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Container = styled.div`
    background-color: white;
    padding: 10px 10px 0px 10px;
    height: calc(100vh - 10px);
    box-shadow: 10px 0 5px -5px #d6d6d6;
    margin: 0;
    margin-right: 5px;
`;

const List = styled.ul`
    margin: 0px;
    padding: 0px;
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
    padding: 10px 30px;
    &:hover{
        color: #6239da;
        transition: 0.3s;
    }
`;

const ActiveLink = styled.a`
    background-color: #6239da;
    color: white;
    border-radius: 50px;
    padding: 10px 30px;
    font-size: 18px;
    text-decoration: none;
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

const FooterContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 40px;
    flex-direction: column;
    display: flex;
    font-size: 18px;
    vertical-align: bottom;
`;

const MyLink = styled.a`
    margin-bottom: 15px;
    color: #6239da;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`;

const SideBar = ({changePage, page}) => {
    return (
        <Container>
            <Logo>
                <IoCalendarOutline /> GoDo!
            </Logo>
            <List>
                <ListItem>
                    {page === 'Todos' ? (
                        <ActiveLink onClick={() => changePage('Todos')}> <Icon><IoCalendar/></Icon>  Todos</ActiveLink>
                    ):(
                        <Link onClick={() => changePage('Todos')}> <Icon><IoCalendar/></Icon>  Todos</Link>
                    )}
                </ListItem>
                <ListItem>
                    {page === 'À Fazer' ? (
                        <ActiveLink onClick={() => changePage('À Fazer')}> <Icon><IoCalendarNumber/></Icon> À Fazer</ActiveLink>
                    ):(
                        <Link onClick={() => changePage('À Fazer')}> <Icon><IoCalendarNumber/></Icon> À Fazer</Link>
                    )}
                </ListItem>
                <ListItem>
                    {page === 'Concluídos' ? (
                        <ActiveLink onClick={() =>{changePage('Concluídos')}}> <Icon><IoCheckmarkDoneCircle/></Icon>  Concluídos</ActiveLink>
                    ):(
                        <Link onClick={() =>{changePage('Concluídos')}}> <Icon><IoCheckmarkDoneCircle/></Icon>  Concluídos</Link>
                    )}
                </ListItem>
            </List>
            <FooterContainer>
                <MyLink target="_blank" href='https://github.com/Arthur-Godoy'><IoLogoGithub /> Meu Git-Hub</MyLink>
                <MyLink target="_blank" href='https://www.linkedin.com/in/arthur-gomides-godoy-94aaa7212/'><IoLogoLinkedin /> Meu LinkedIn</MyLink>
            </FooterContainer>
        </Container>
    )
}

export default SideBar