import React from 'react';
import Contact from '../Components/Contact/Contact';
import Projects from '../Components/Projects/Projects';
import Footer from './Footer/Footer';
import HeaderBody from './HeaderBody/HeaderBody';
import NavBar from './NavBar/NavBar';
import TopHeader from './TopHeader';

const Home = () => {
    return (
        <section>
           <NavBar></NavBar> 
           <TopHeader></TopHeader>
           <HeaderBody></HeaderBody>
           <Projects></Projects>
           <Contact></Contact>
           <Footer></Footer>
        </section>
    );
};

export default Home;