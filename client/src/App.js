import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import ContactList from './Components/ContactList';
import Add from './Components/Add';
import { Button } from 'semantic-ui-react';
import { toggleFalse } from './redux/actions/edit';
import {useDispatch} from 'react-redux'


function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2 style={{margin:20}}>MERN APPLICATION</h2>
      <Button style={{margin:20}} inverted color="blue" onClick={()=>dispatch(toggleFalse())}> 
       <Link to="/add"> Add Contact</Link>
        </Button>
        <Button style={{margin:20}} inverted color="blue">
       <Link to="/">Contact List</Link>
        </Button>
    <Switch>
      <Route exact path="/" component={ContactList} />
      <Route  path={["/add", "/edit/:id"]} component={Add} />
    </Switch>
    </div>
  );
}

export default App;
