import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Doctor from './components/Doctor';
import Doctors from './components/Doctors';

import { Provider } from './context';
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Doctors />
            </Route>
            <Route exact path="/doctor/:id">
              <Doctor />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
