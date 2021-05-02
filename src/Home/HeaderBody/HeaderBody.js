import React from 'react';
import styles from "../../Components/Projects/Projects.module.css";
import { jsPDF } from "jspdf";
import { Button } from 'react-bootstrap';
import Resume1 from './Resume1.png';
import Resume2 from './Resume2.png';
import Image from './img.png';
import HeaderContain from './HeaderContain';
const HeaderBody = () => {
    const pdfGenerate = () => {
        const doc = new jsPDF ('landscape', 'px', 'a4', 'false');
        doc.addImage(Resume1, 'PNG', 65,20,500,400);
        doc.save('resume.pdf')
    }
    return (
          <section style={{backgroundColor: "black", margin: "0"}} >
              <HeaderContain></HeaderContain>
                    {/* <div style={{backgroundColor: "black", margin: "0"}} className={styles.projectCart}>
                        <div className={styles.projectDetails}>
                        <p>
                        A font-end web developer and I work with youth and indomitable desire
                        Learnend web development from Programing Hero
                        Bringing forth experinse in desgine, installation, testing and maintenance of web systems
                        Familiaer with backend development
                        Tools: Git, VSCode, Chrome Dev Tool, , Adobe Illustrator, Adobe Photoshop
                         </p>
                        <div className={styles.btn}>
                        <a href="https://drive.google.com/file/d/1yKEsSefrllZzlF0amOMr0QOz2_LtsTNx/view?usp=sharing" style={{margin: "10px"}} > <Button variant="warning">View Resume</Button></a>

                        <Button onClick={pdfGenerate} variant="info">Download Resume</Button>
                        </div>
                
                        </div>
                       <a href=""> <img className={styles.projectIMG}  src={Image} alt=""/> </a> 
                    </div> */}
          </section>


    );
};

export default HeaderBody;