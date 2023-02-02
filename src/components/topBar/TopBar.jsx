import React,{useState} from 'react'
import styled from 'styled-components';
import { IoAdd } from 'react-icons/io5'
import { Modal } from '@mui/material';
import NewTask from '../newtask/NewTask';

const Container = styled.div`
    display: flex;
    justify-content: end;
    align-items: baseline;
`;

const NewButton = styled.button`
    top: 15px;
    position: absolute;
    border: none;
    border-radius: 50px;
    background-color: #4f21d7;
    color: white;
    height: 35px;
    padding-right: 20px;
    margin-right: 50px;
`;

const Title = styled.h1`
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    font-weight: 500;
    color: #4f21d7;
    font-size: 25px;
`;

const TopBar = ({title, storeTask}) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <Container>
            <Title>{title}</Title>
            <NewButton onClick={() => handleOpen()}><IoAdd/> Nova Tarefa</NewButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <NewTask storeTask={storeTask} />
            </Modal>
        </Container>
    )
}

export default TopBar