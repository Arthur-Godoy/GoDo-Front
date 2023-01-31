import React from "react";
import { Grid, Typography } from "@mui/material";
import SideBar from './components/sidebar/SideBar';
import styled  from 'styled-components';


const App = () => {
  return (
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <SideBar/>
        </Grid>
        <Grid item xs={10}>
          
        </Grid>
      </Grid>
  );
}

export default App;
