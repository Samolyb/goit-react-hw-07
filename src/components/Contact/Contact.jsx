import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { FaPhoneAlt, FaUser, FaUserMinus } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
    };

    return (
        <div className={css.maincontainer}>
            <li className={css.container}>
                <div className={css.info}>
                    <FaUser className={css.icon} />
                    {name}
                    <FaPhoneAlt className={css.icon} />
                    {number}
                </div>
                <button className={css.btn} onClick={handleDelete}>
                    <FaUserMinus className={css.icon} />
                    Delete
                </button>
            </li>
        </div>
    );
};

export default Contact;