import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { fetchContacts, addContact, deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './App.module.css';

const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);
    const filter = useSelector(selectNameFilter);
    const loading = useSelector(state => state.contacts.loading);
    const isError = useSelector(state => state.contacts.error);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleAddContact = (name, number) => {
        dispatch(addContact({ name, number }));
    };

    const handleDeleteContact = (contactId) => {
        dispatch(deleteContact(contactId));
    };

    const handleFilterChange = (event) => {
        dispatch(changeFilter(event.target.value));
    };

    return (
        <div className={css.mainContainer}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm onAdd={handleAddContact} />
            <SearchBox filter={filter} onFilterChange={handleFilterChange} />
            {loading && <Loader>Loading message</Loader>}
            {isError && <Error>Error message</Error>}
            <ContactList contacts={contacts} onDelete={handleDeleteContact} />
        </div>
    );
};

export default App;
