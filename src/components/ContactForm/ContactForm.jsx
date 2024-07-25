import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { FaUser, FaPhoneAlt, FaUserPlus } from 'react-icons/fa';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .trim()
        .min(3, 'Please enter your name. Minimum length of three characters.')
        .max(50, 'Too long!')
        .required('This field is required'),
    number: Yup.string()
        .min(10, 'Please enter your phone number. Minimum length is ten digits.')
        .max(13, 'Too long!')
        .required('This field is required'),
});

const ContactForm = () => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={ContactSchema}
            onSubmit={(values, actions) => {
                dispatch(addContact(values));
                actions.resetForm();
            }}
        >
            <Form className={css.form}>
                <div className={css.labelName}>
                    <label htmlFor="name">Name</label>
                    <Field className={css.field} name="name" id="name" />
                    <FaUser className={css.icon} />
                    <span className={css.errorMessage}>
                        <ErrorMessage name="name" />
                    </span>
                </div>
                <div className={css.labelName}>
                    <label htmlFor="number">Number</label>
                    <Field className={css.field} name="number" id="number" />
                    <FaPhoneAlt className={css.icon} />
                    <span className={css.errorMessage}>
                        <ErrorMessage name="number" />
                    </span>
                </div>
                <button className={css.btn} type="submit">
                    <FaUserPlus />
                    Add Contact
                </button>
            </Form>
        </Formik>
    );
};

export default ContactForm;