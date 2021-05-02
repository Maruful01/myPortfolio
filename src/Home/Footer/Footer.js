import React from 'react';
import styles from "./Footer.module.css";
const Footer = () => {
    return (
        <footer className={styles.footerComponent}>
            <div className="d-flex align-items-center d-flex justify-content-evenly">
              <p>@ copy write Khan Maruful Islam</p>
            </div>

            <div className="d-flex align-items-center d-flex justify-content-evenly">
                 <a href=""> Email: khanmarufulis@gmail.com </a>
            </div>

            <div className="d-flex align-items-center d-flex justify-content-evenly">
                  <a href="">My Resume</a>
            </div>

        </footer>
    );
};

export default Footer;