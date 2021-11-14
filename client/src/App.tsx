import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllPeople from './components/poeple-all/poeple-all';
import Header from './components/header/Header';
import ByPageId from './components/people-by-id/poeple-by-id';

const App: React.FC<{}> = (props) => {
  return (
    <div>
      <h1>App Page</h1>
      <Header />
      <Switch>
        <Route path="/" exact>
          <AllPeople />
        </Route>
        <Route path="/page/:pageId">
          <ByPageId />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
