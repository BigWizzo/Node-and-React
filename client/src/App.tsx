import React from 'react';
import AllPeople from './components/people/poeple-all/poeple-all';
import Header from './components/header/Header';

const App: React.FC<{}> = (props) => {
  return (
    <div>
      <h1>App Page</h1>
      <Header />
      <AllPeople />
    </div>
  );
};

export default App;
