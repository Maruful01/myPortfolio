import React from 'react';
import NavBar from '../../Home/NavBar/NavBar';
import ResumeImg1 from '../../Home/HeaderBody/Resume1.png'
import ResumeImg2 from '../../Home/HeaderBody/Resume2.png'
import Resume1 from '../../Home/HeaderBody/Resume.pdf'
import { Button } from 'react-bootstrap';

const Resume = () => {
    return (
        <div style={{
            backgroundColor: "black",
        }}>
            <NavBar></NavBar>
            <div style={{width: "80%", margin: "auto", backgroundColor: "white", color: "black", textAlign: "center"}}>
            <a style={{marginTop: "20px"}} href={Resume1} ><Button  variant="info">Download Resume</Button></a>
            <img style={{width: "100%", boxShadow: "1px 1px 5px gray", marginBottom: "10px", backgroundColor: "white", marginTop: "100px"}} src={ResumeImg1} alt=""/>
            <img style={{width: "100%", boxShadow: "1px 1px 5px gray", backgroundColor: "white"}} src={ResumeImg2} alt=""/>
            </div>
        </div>
    );
};

export default Resume;