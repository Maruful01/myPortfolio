import React, { useContext, useState } from 'react';
import { NavContext } from '../../App';
import styles from "./Projects.module.css";
import { Button } from 'react-bootstrap';
import ProductCart from './ProductCart';

const myProjects = [
    {
        name: "Bpl Player Retention",
        line1: "• This site is created for Bangladesh Premier League player’s retention",
        line2: "• Select a player and add them to the cart it will show the total price",
        line3: "• Every player’s cart shows a photo and their salary",
        live: "https://603cdc398ed4f66a09cfe183--amazing-wright-bcb87a.netlify.app/",
        git: "https://github.com/Porgramming-Hero-web-course/simple-react-Maruful01",
        img: "https://i.ibb.co/0jjDpf5/Screenshot-12.png"

    },
    {
        name: "Pick Me",
        line1: "• This is a ride-sharing website",
        line2: "• Only an authenticated user can order a ride",
        line3: "• User can select a location using the map",
        live: "https://happy-colden-dd6df6.netlify.app",
        git: "https://github.com/Porgramming-Hero-web-course/react-auth-Maruful01",
        img: "https://i.ibb.co/q1kxPT9/Screenshot-8.png"

    },
    {
        name: "Sports Mania",
        line1: "• This site is created for showing football League details",
        line2: "• Selecting by League cart will show the details with team logo and player’s photo",
        line3: "• For design, CSS grid layout and pure CSS is usedused",
        live: "https://hardcore-albattani-ecffd5.netlify.app",
        git: "https://github.com/Porgramming-Hero-web-course/react-router-Maruful01",
        img: "https://i.ibb.co/XfB84bF/Screenshot-9.png"

    },
    {
        name: "DB Groceries",
        line1: "• This site is created for showing football League details",
        line2: "• Selecting by League cart will show the details with team logo and player’s photo",
        line3: "• For design, CSS grid layout and pure CSS is usedused",
        live: "https://reverent-keller-d81e32.netlify.app/",
        git: "https://github.com/Maruful01/Assignment-6",
        img: "https://i.ibb.co/RP77N1K/Screenshot-19.png"
        

    }]

const Projects = () => {

    return (
        <div>
            <div style={{ backgroundColor: "black", position: "relative", zIndex: "-10", padding: "20px"}}>
            <h1 style={{color: "red", textAlign: "center"}}>My Project's</h1>
                <div style={{margin: "20px"}}  className={styles.projectGrid}>

                    {
                        myProjects.map (data => <ProductCart products={data}> </ProductCart>)
                    }
                    
                </div>
        </div>
        </div>

    );
};

export default Projects;