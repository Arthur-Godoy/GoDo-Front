import React, {useEffect, useState} from "react";
import { Grid, Modal, Skeleton } from "@mui/material";
import SideBar from './components/sidebar/SideBar';
import styled  from 'styled-components';
import TopBar from "./components/topBar/TopBar";
import TaskMin from './components/taskMin/TaskMin';
import api from './services/api'
import TaskOpen from './components/taskOpen/TaskOpen';

const ContentContainer = styled.div`
    margin: 0;
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
    const [tasks, setTasks] = useState('');
    const [open, setOpen] = useState(false);
    const [modalTask, setModalTask] = useState({});
    const [page, setPage] = useState('Todos');

    const handleOpen = () =>{setOpen(true)}

    const handleClose = () =>{setOpen(false)}

    const changeModalTask = (childTask) =>{setModalTask(childTask)}
    
    const changePage = (actualPage) =>{
        setPage(actualPage);
    }

    const deleteTask = (id) =>{
        api.delete('tasks/'+id)
        .then(() => window.location.reload(true));
    }

    const storeTask = (task) =>{
        api.post('tasks', {
            name: task.name,
            description: task.description,
            finishDate: task.finishDate,
            concluded: task.concluded
        })
        .then(() => window.location.reload(true));
    }

    const updateTask = (task) =>{
        console.log(task)
        api.put('tasks/'+task.id, {
            name: task.name,
            description: task.description,
            finishDate: task.finishDate,
            concluded: task.concluded
        })
        .then(() => window.location.reload(true));
    }

    const concludeTask = (request) =>{
        api.put('tasks/'+ request.id, {
            name: request.name,
            description: request.description,
            finishDate: request.date,
            concluded: request.concluded
        })
        .then(() => window.location.reload(true));
    }

    useEffect(() => {
        api.get('tasks')
            .then((response) => {
                if(page === 'Todos'){
                    setTasks(response.data);
                    
                }else if(page === 'À Fazer'){
                    let tempArr = [];
                    response.data.map((task) => {
                        if(task.concluded === 0){
                            tempArr.push(task)
                        }
                    })
                    setTasks(tempArr)
        
                }else if(page === 'Concluídos'){
                    let tempArr = [];
                    response.data.map((task) => {
                        if(task.concluded === 1){
                            tempArr.push(task)
                        }
                    })
                    setTasks(tempArr)
                }
            })
            .catch((err) => {
                console.log('erro' + err)
            })
    },[page])

    return (
        <ContentContainer>
            <Grid container sx={{ height: '100vh', margin:0 }} s>
                <Grid item md={2}>
                    <SideBar page={page} changePage={changePage}/>
                </Grid>
                <Grid item md={10}>
                    <TopBar title={page} storeTask={storeTask}/>
                    {tasks === '' && (
                        <TasksContainer>
                            <Skeleton style={{margin: 10}} variant="rectangular" width={'30%'} height={90} />                            
                            <Skeleton style={{margin: 10}} variant="rectangular" width={'30%'} height={90} />                            
                            <Skeleton style={{margin: 10}} variant="rectangular" width={'30%'} height={90} />                            
                        </TasksContainer>
                    )}
                    <TasksContainer>
                        {tasks !== '' && tasks.map((task) =>{
                            return tasks.length === 0? (
                                <h1>AINDA NÃO TEMOS TAREFAS PARA EXIBIR</h1>
                            ):(
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
                <TaskOpen updateTask={updateTask} concludeTask={concludeTask} deleteTask={deleteTask} task={modalTask} />
            </Modal>
        </ContentContainer>
    );
}

export default App;
