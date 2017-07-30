import React, { PropTypes } from 'react';

import './Search.scss';


const propTypes = {
  handleSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
}

const Search = ({ search, handleSearch }) => {
  return (
    <div className="search">
      <input type="text" value={search} onChange={(event) => handleSearch(event.target.value)} />
      по названию
    </div>
  )
}

Search.propTypes = propTypes;

export default Search;
