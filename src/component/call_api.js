import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState} from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { green } from '@material-ui/core/colors';
import './call_api.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
  },
}));

export default function FetchAPI() {

  const classes = useStyles();
  const [inputs, setInputs] = useState({});
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  var data1;
  const audioTune = new Audio(data);

  


    // methode GET
  const apiGet = ()  =>  {
    setTimeout(() => {
    setLoading(true);
    const headers = {  'Authorization': 'Token token="Ya6NkipQmCkATcRsMGVHbQtt"', 'Content-Type': 'application/json'}
      fetch('https://app.resemble.ai/api/v1/projects/ceac6e9b-oui/clips/' + data1 + '-' + inputs.title, { headers })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json['link']);
        });
      }, 17000);
      setLoading(false);
      };

    //methode POST
    const apiPost = async () => {
        await fetch("https://app.resemble.ai/api/v1/projects/ceac6e9b-oui/clips", {
          method: "POST",
          body: JSON.stringify({
            'data': {
              title: "Titre",
              body: inputs.body,
              voice: inputs.voice,
            },
            callback_uri: "https://mycall.back/service"
          }),
          headers: {
            'Authorization': 'Token token="Ya6NkipQmCkATcRsMGVHbQtt"', 'Content-Type': 'application/json'
          },
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            data1 = json['id'];
            console.log(data1)
          });
      };

      const handleChange = (event) => {
        event.persist();
        setInputs((inputs) => ({
          ...inputs,
    
          [event.target.name]: event.target.value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        apiPost();
        console.log(inputs);
        apiGet();
      };


    const playSound = () => {
      audioTune.play();
    }
  

    return (
        <div class="center-div">
          <p>Text-to-speech, rentrez le texte que vous voulez transcrire en audio</p>
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
          <br/>
          <TextField
           multiline rows={5} 
           label="Entrez votre texte" 
           name="body" 
           variant="outlined" 
           type="text" 
           id="standard-basic"  
           onChange={handleChange}
           style={{ margin: 1,width: 300}} 
           ></TextField>
          <br />
          <br/>
          <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Choix de voix</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={handleChange}
          label="Choix de voix"
          name="voice"
          style={{ margin: 1,width: 150}}
        >
          <MenuItem value="">
            <em>Choix de voix</em>
          </MenuItem>
          <MenuItem value="584fae8e">Voix 1</MenuItem>
        </Select>
      </FormControl>
          <br/>
          <br/>
          <Button type = "submit" variant="contained" color="primary" className="myButton" onClick={handleChange}>Submit</Button>
         {/* <Button type = "submit" variant="contained" color="primary" className="myButton" onClick={apiGet}>API</Button> */}
        </form>
        <br/>
        <div>
         {/* <pre>{JSON.stringify(data1, null, 2)}</pre> 
         <pre>{JSON.stringify(data, null, 2)}</pre>*/}
          <br/>
        <div>
            {!isLoading && (
              
              <CircularProgress />
            )}
              {isLoading && (
              <Button type = "submit" variant="contained" color="primary" className="myButton" onClick={playSound}>
              <PlayArrowIcon className="Play" style={{ color: green[2] }} />
              </Button>
            )}
            <br></br>
            <br></br>
            <br></br>
            {isLoading && (
              
              <Button className="active" ><a href={data}>Click to download</a></Button>
              
            )}
          </div>
      </div>
      <br />
        </div>
      );
}