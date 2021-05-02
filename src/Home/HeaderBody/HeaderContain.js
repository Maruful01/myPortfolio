import React from 'react';
import './HeaderContain.css';
import { jsPDF } from "jspdf";
import Resume1 from './Resume.pdf';
import { Button } from 'react-bootstrap';
import ProductCart from '../../Components/Projects/ProductCart';
import { Link, useHistory, useLocation } from 'react-router-dom';

const HeaderContain = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/home" } };


    // const pdfGenerate = () => {
    //     const doc = new jsPDF ('landscape', 'px', 'a4', 'false');
    //     doc.addImage(Resume1, 'pdf', 65,90,300,300);
    //     doc.save('resume.pdf')

    //     //   const doc = new jsPDF();
    //     //   doc.text("Hello world!", 10, 10);
    //     //   doc.save("a4.pdf");
    // }
    return (
        <div className= "header-contain-div">
            <div>
                  <div className="small-device">
                       <p style={{margin: "auto", textAlign: "left"}}>
                        A font-end web developer and I work with youth and indomitable desire
                              Learnend web development from Programing Hero
                              Bringing forth experinse in desgine, installation, testing and maintenance of web systems
                              Familiaer with backend development
                              Tools: Git, VSCode, Chrome Dev Tool, , Adobe Illustrator, Adobe Photoshop.
                                    Bringing forth experinse in desgine, installation, testing and maintenance of web systems
    
                       </p>
                       <div className="btn-small">
                       <a href="https://drive.google.com/file/d/1yKEsSefrllZzlF0amOMr0QOz2_LtsTNx/view?usp=sharing" style={{margin: "10px"}} > <Button variant="warning">View Resume</Button></a>

                       <a href={Resume1}><Button  variant="info">Download Resume</Button></a>
                       </div>

                         </div>   


                <img className="my-image" src="https://i.ibb.co/gd28Msx/img.png" alt=""/>
            </div>
            <div  className="about-box" >
            <p style={{margin: "auto", textAlign: "left"}}>
                        A font-end web developer and I work with youth and indomitable desire
                        Learnend web development from Programing Hero
                        Bringing forth experinse in desgine, installation, testing and maintenance of web systems
                        Familiaer with backend development
                        Tools: Git, VSCode, Chrome Dev Tool, , Adobe Illustrator, Adobe Photoshop.
                        A font-end web developer and I work with youth and indomitable desire
                        Learnend web development from Programing Hero
                        Bringing forth experinse in desgine, installation, testing and maintenance of web systems
    
            </p>
            <div className="btn-class">
            <a href="https://drive.google.com/file/d/1yKEsSefrllZzlF0amOMr0QOz2_LtsTNx/view?usp=sharing" style={{margin: "10px"}} > <Button variant="warning">View Resume</Button></a>

            <a href={Resume1}><Button  variant="info">Download Resume</Button></a>

            </div>

            </div>
    
        </div>
    );
};

export default HeaderContain;