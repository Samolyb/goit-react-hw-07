import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import { FaSistrix } from "react-icons/fa6";
import css from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value));
    };

    return (
        <div className={css.searchBox}>
            <label htmlFor="search">Find contacts by name</label>
            <input
                type="text"
                id="search"
                value={filter}
                onChange={handleChange}
                className={css.input}
            />
            <FaSistrix className={css.icon} />
        </div>
    );
};

export default SearchBox;