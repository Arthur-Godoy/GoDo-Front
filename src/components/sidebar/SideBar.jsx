import React from 'react'
import styled from 'styled-components';
import { IoCalendar, IoCheckmarkDoneCircle, IoCalendarNumber, IoCalendarOutline } from 'react-icons/io5'

const Container = styled.div`
  padding: 10px;
  height: 100%;
  box-shadow: 10px 0 5px -5px #dfdede;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  padding: 10px 0px;
`;

const Link = styled.a`
  font-size: 15px;
  text-decoration: none;
  color: black;
  &:hover{
    color: #db0bdb;
    transition: 0.3s;
  }
`;

const Icon = styled.span`
  font-size: 15px;
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
          <Link href=""> <Icon><IoCalendarNumber/></Icon> Hoje</Link>
        </ListItem>
        <ListItem>
          <Link href=""> <Icon><IoCheckmarkDoneCircle/></Icon>  Concluídos</Link>
        </ListItem>
      </List>
    </Container>
  )
}

export default SideBar