import React from 'react';
import MicIcon from '@material-ui/icons/Mic';
import { green } from '@material-ui/core/colors';
import { Button} from "@material-ui/core";
import StopOutlinedIcon from '@material-ui/icons/StopOutlined';
import './voice.css';
import './Header.css';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'


export default class Micro extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recordState: null,
      audioData: null
    }
  }
  

  start = () => {
    this.setState({
      recordState: RecordState.START
    })
  }



  stop = () => {
    this.setState({
      recordState: RecordState.STOP
      
    })
  }


  onStop = (data) => {
    this.setState({
      audioData: data
    })
    console.log('onStop: audio data', data)
  }

  render() {
    const { recordState } = this.state

    return (

      <div>
        
        <audio
          id='audio'
          controls
          src={this.state.audioData ? this.state.audioData.url : null}
        ></audio>
        <br></br>
        <br></br>
        <Button type = "submit" variant="contained" color="primary" className="myButton" onClick={this.start} disabled={this.state.isRecording}> 
          <MicIcon className="Micro" style={{ color: green[2] }} />
        </Button>
        <Button style={{ marginLeft: 30 }}type = "submit" variant="contained" color="primary" className="myButton" onClick={this.stop} >
          <StopOutlinedIcon className="Stop" style={{ color: green[2] }}/>
        </Button>
        <br></br>
        <br></br>
        <AudioReactRecorder
          state={recordState}
          onStop={this.onStop}
          backgroundColor='whitesmoke'
        />
        
      </div>
    );
  }
}