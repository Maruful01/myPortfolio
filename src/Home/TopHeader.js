import React from 'react';
import styles from "./HeaderBody/HeaderBody.module.css";

const TopHeader = () => {
    return (
        <div style={{backgroundColor: "black", textAlign: "center", height: "90vh", paddingTop: "30vh", fontFamily: "revert"}}>
                 <h3 style={{fontWeight: "lighter"}} className={styles.animations}><span>H</span>i, <span>I</span> am 
                    <br/> <span>K</span>ha<span>n</span> <span>M</span>aru<span>f</span>u<span>l</span>  <span>I</span>slam</h3>
                 <div className={styles.wallpaper}>
                     <div  style={{fontWeight: "lighter"}} className={styles.staticText}>I'm a</div>
                         <ul className={styles.dynamicText}>
                            <li> <span> Web Developer</span> </li>
                         </ul>
                    </div>
        </div>
    );
};

export default TopHeader;