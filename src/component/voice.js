import {  TextField } from "@material-ui/core";
import './miniform.css';
import { makeStyles} from '@material-ui/core/styles';
import Micro from "./micro";
import React, { useEffect, useState} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2)
    },

  },
}));

export default function Voice() {

  const classes = useStyles();
  const [data, setData] = useState([]);


  const getVoice = ()  =>  {
    const headers = {  'Authorization': 'Token token="Ya6NkipQmCkATcRsMGVHbQtt"', 'Content-Type': 'application/json'}
      fetch('https://app.resemble.ai/api/v1/voices', { headers })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
        });
      };

      useEffect(() => {
             getVoice();
           }, []);



    return( 
    <div class="center" >
 

      <p>Créez votre voix</p>
      <TextField
      id="standard-read-only-input"
      style={{ margin: 1,width: 1200 }}
      defaultValue="Nul besoin donc d'inventer autre chose"
      InputProps={{
        readOnly: true,
      }}
      variant="outlined"
      />
      <div className={classes.root}>
        <Micro/>
    </div>
     {/*<div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              Nom : {item.name} Language : {item.language}
            </li>
          ))}
        </ul>
      </div> */}
      <div class="div-table">
      <TableContainer component={Paper} class="style-table">
      <h2 className={classes.head}>Liste des voix</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>Nom</b></TableCell>
            <TableCell align="center"><b>Language</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell align="center">{item.name}</TableCell>
              <TableCell align="center">{item.language}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
    )
  }
