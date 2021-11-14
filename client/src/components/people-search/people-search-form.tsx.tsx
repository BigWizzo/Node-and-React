import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const SearchForm: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [name, setName] = useState<string>('');

  const handleClick = () => {
    console.log(history);
    console.log(location);
    return history.push({ pathname: '/people/', search: `name=${name}` });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
};

export default SearchForm;
