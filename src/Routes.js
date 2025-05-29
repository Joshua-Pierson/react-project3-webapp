import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Home} from './Pages/Home';
import { ToDoList } from './Pages/ToDoList';

export const Routes = () => {
  return (
    <Router>
        <Switch>
            {/* Define your routes here */}
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ToDoList />} />
        </Switch>
    </Router>
  );
};

