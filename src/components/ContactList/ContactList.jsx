import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = ({ onDelete }) => {
    const contacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.contactList}>
            {contacts.map(({ id, name, number }) => (
                <Contact
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default ContactList;