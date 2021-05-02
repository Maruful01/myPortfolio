import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../Components/Contact/Contact';
import styles from "./NavBar.module.css"

const NavBar = () => {
    const [toggle, setToggle] = useState (false);
    return (
        <header>
             <div className={styles.alignRight}>
                 <h1 style={{position: "absolute", left: "5%", color: "white", color: "red", marginTop: "5px"}}>M</h1>
                        <ul className={styles.toggleUl}>
                              <li>  <Link className={styles.link} to="/">Home</Link> </li>
                              <li> <Link className={styles.link} to="/project's">Project's</Link> </li>
                              <li> <Link className={styles.link} to="">Blog</Link> </li>
                              <li> <Link className={styles.link} to="/resume">Resume</Link> </li>
                              <li> <Link className={styles.link} to="/contact">Contact</Link> </li>
                              <li> <Link className={styles.link} to="">Let's Talk</Link> </li>
                        </ul>

                        { toggle ?                 
                                   <div className={styles.toggleBar}>
                                       <h1 style={{position: "absolute", left: "5%", color: "white", color: "red", marginTop: "20px"}}>M</h1>
                                       <div className={styles.toggleBarLinks}>
                                                    <p>  <Link className={styles.link} to="/">Home</Link> </p>
                                                    <p> <Link className={styles.link} to="/project's">Project's</Link> </p>
                                                    <p> <Link className={styles.link} to="">Blog</Link> </p>
                                                    <p> <Link className={styles.link} to="/resume">Resume</Link> </p>
                                                    <p> <Link className={styles.link} to="/contact">Contact</Link> </p>
                                       </div>
                                                   
                                                    <button className={styles.toggleBtn} style={{position: "absolute", top: "10px", right: "50px", border: "none", background: "none", color: "red", fontSize: "30px"}}
                                                     onClick={() => setToggle (false)}>{toggle ? <i class="fas fa-times"></i> : "Open"}</button>
                                               </div>
                                                : ""
                                             
                        }
                <button  className={styles.toggleBtn} style={{position: "absolute", top: "10px", right: "50px", border: "none", background: "none", color: "red", fontSize: "30px"}}
                 onClick={() => setToggle (true)}>{toggle ? "" : <i class="fas fa-align-right"></i>}</button>

             </div>
        </header>
    );
};

export default NavBar;