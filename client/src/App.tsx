import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import SinglePerson from './components/poeple-single/people-single';
import SearchPage from './components/people-byname/people-byname';

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/people" exact>
          <Homepage />
        </Route>
        <Route path="/search" exact>
          <SearchPage />
        </Route>
        <Route path="/people/:personId" exact>
          <SinglePerson />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
