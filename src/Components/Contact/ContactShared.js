import React from 'react';
import NavBar from '../../Home/NavBar/NavBar';
import Contact from './Contact';
import ContactFooter from './ContactFooter';

const ContactShared = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Contact></Contact>
            <ContactFooter></ContactFooter>
        </div>
    );
};

export default ContactShared;