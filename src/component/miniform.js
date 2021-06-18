import './miniform.css';
import React, { useEffect} from 'react';
import Music from './Music.mp3';
import { makeStyles } from '@material-ui/core/styles';
import FetchAPI from './call_api';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2)
    },
  },
}));

export default function Component1() {

  const classes = useStyles();
  const audioTune = new Audio(Music);


  useEffect(() => {
    audioTune.load();
  }, )

  //const playSound = () => {
    //audioTune.play();
  //}
  
  //const pauseSound = () => {
    //audioTune.pause();
  //}

    return( 
    <div class="center-div" >
    <div className={classes.root}>
    {/*<Button type = "submit" variant="contained" color="primary" className="myButton" onClick={playSound}> 
    <PlayArrowIcon className="Play" style={{ color: green[2] }} />
    </Button>
    <Button type = "submit" variant="contained" color="primary" className="myButton" onClick={pauseSound}> 
    <StopIcon className="Stop" style={{ color: green[2] }} />
    </Button> */}
    </div>
    </div>
    )
  }
