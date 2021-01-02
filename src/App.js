import './App.css';
import Data from './Components/DataLoad/Data';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageNotFound from './Components/PageNotFound/PageNotFound';
import ShowDetail from './Components/ShowDetail/ShowDetail';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/ShowDetail/:DetailId">
                <ShowDetail></ShowDetail>
            </Route>
            <Route exact path="/">
                <Data></Data>
            </Route>
            <Route path="*">
               <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
