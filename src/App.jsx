import React, {useEffect, useState} from "react";
import { Grid, Modal } from "@mui/material";
import SideBar from './components/sidebar/SideBar';
import styled  from 'styled-components';
import TopBar from "./components/topBar/TopBar";
import TaskMin from './components/taskMin/Task';
import api from './services/api'

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
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState({});

  const handleOpen = () =>{setOpen(true)}
  const handleClose = () =>{setOpen(false)}
  const changeModalTask = (childTask) =>{setTask(childTask)}

  useEffect(() => {
    api.get('tasks')
        .then((response) => {
          setTasks(response.data)
        })
        .catch((err) => {
          console.log('erro' + err)
        })
  },[])

  return (
    <ContentContainer>
        <Grid container sx={{ height: '100vh' }} s>
          <Grid item md={2}>
            <SideBar/>
          </Grid>
          <Grid item md={10}>
            <TopBar title="Hoje"/>
            <TasksContainer>
              {tasks.map((task) =>{
                console.log(task)
                return(
                  <TaskMin handleOpen={handleOpen} changeModalTask={changeModalTask} key={task.id} task={task}/>
                )
              })}
            </TasksContainer>
          </Grid>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <h1>asdasd</h1>
        </Modal>
      </ContentContainer>
  );
}

export default App;
