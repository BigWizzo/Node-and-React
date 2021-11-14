import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
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
      </Switch>
    </div>
  );
};

export default App;
