import './App.css';
import Header from './component/Header';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom"
import Voice from './component/voice';
import FetchAPI from './component/call_api';
import logo from './404.jpg';


function App() {
  return (
    <div className="App">

      <Router
      forceRefresh={true}>
        <Header/>

        <Switch>
          <Route path="/" exact component={FetchAPI} />
          <Route path="/component/voice" component={Voice} />
          <Route path="/" component={() => <div class="App-center"> <img src={logo} alt="Logo" /> </div>} />
        </Switch>
        
        </Router>
    </div>
  );

  
}

export default App;
