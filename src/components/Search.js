import React from 'react';
import icon from '../assets/search.svg'

function Search(props) {
    return (
        <div className="search-form">
            <form className='mt-10 mb-10'>
            <img src={icon} alt="" className="search-icon mr-6 ml-6" />
            <input placeholder="Find Something..." />
            <button>Search</button>
            </form>
        </div>
    );
}

export default Search;