import React from "react";
import { Grid } from "@mui/material";
import SideBar from './components/sidebar/SideBar';
import styled  from 'styled-components';
import TopBar from "./components/topBar/TopBar";
import Task from './components/task/Task';

const ContentContainer = styled.div`
  background-color: #f6f8fa;
`;

const TasksContainer = styled.div`
  display: flex;
  flex-grow: 0;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const App = () => {
  return (
    <ContentContainer>
        <Grid container sx={{ height: '100vh' }} s>
          <Grid item md={2}>
            <SideBar/>
          </Grid>
          <Grid item md={10}>
            <TopBar title="Hoje"/>
            <TasksContainer>
              <Task name="Café" description="lalalalalal" concluded={false} date="20-01-2023"/>
              <Task name="Café" description="lalalalalal" concluded={false} date="20-02-2023"/>
              <Task name="Café" description="lalalalalal" concluded={false} date="20-01-2024"/>
              <Task name="Café" description="lalalalalal" concluded={false} date="20-01-2025"/>
              <Task name="Café" description="lalalalalal" concluded={false} date="20-01-2023"/>
              <Task name="Café" description="lalalalalal" concluded={false} date="20-01-2023"/>
              <Task name="Café" description="lalalalalal" concluded={false} date="20-01-2023"/>
              <Task name="Café" description="lalalalalal" concluded={false} date="20-01-2023"/>
            </TasksContainer>
          </Grid>
        </Grid>
      </ContentContainer>
  );
}

export default App;
