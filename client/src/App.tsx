import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllPeople from './components/poeple-all/poeple-all';
import Header from './components/header/Header';
import ByPageId from './components/people-by-id/poeple-by-id';
import ByNameAndId from './components/people-by-name-id/poeple-by-name-id';
import Homepage from './components/homepage/Homepage';

const App: React.FC<{}> = (props) => {
  return (
    <div>
      <h1>App Page</h1>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/page/" exact>
          <ByPageId />
        </Route>
        <Route path="/page/:pageId" exact>
          <ByPageId />
        </Route>
        <Route path="/name-id/:nameId" exact>
          <ByNameAndId />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
