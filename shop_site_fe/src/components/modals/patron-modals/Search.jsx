import React from 'react';
import Searcher from '../../../utils/images/header/search-icon-other.png';
import X from '../../../utils/images/header/X.png';
import '../../../styles/modals/patron-modals/search.scss';

const Search = ({ search, handleChange, handleSubmit, showSearching }) => {
    return (
        <div className="searchBar">
            <img className="x" src={Searcher} alt="magnifying glass" onClick={() => {}} />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="query"
                    placeholder="Search home goods"
                    value={search}
                    onChange={handleChange}
                />
            </form>
            <img className="x" src={X} alt="Close search" onClick={() => showSearching(false)} />
        </div>
    );
};

export default Search;