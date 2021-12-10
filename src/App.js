import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
import Login from "./Component/Login";
import Mobile from "./Component/Mobile";
import confirm from "./Component/Confirm"

function App() {
  return (
    <div>
     <BrowserRouter>
     <Switch>
        <Route exact path="/" component={Mobile}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/confirm" component={confirm}/>
        </Switch>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
