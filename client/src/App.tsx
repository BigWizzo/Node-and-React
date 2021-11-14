import React from 'react';
import AllPeople from './components/people/poeple-all/poeple-all';
// import IRoute from './config/routes-interfaces/routes';

const App: React.FC<{}> = (props) => {
  return (
    <div>
      <h1>App Page</h1>
      <AllPeople />
    </div>
  );
};

export default App;
