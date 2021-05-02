import React from 'react';
import NavBar from '../../Home/NavBar/NavBar';
import { Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div style={{backgroundColor: "black", textAlign: "center", height: "auto", paddingBottom: "20px", paddingTop: "20px"}}>
           <form >
           <div className="message-box">
            <h4>Send Message</h4>
            <p>I may answer your all question</p>
            <input className="input-field" type="text" name="" id="" placeholder="Your Name"/>
            <br/>
            <input className="input-field" type="text" name="" id="" placeholder="Your Email"/>
            <br/>
            <input className="input-field" type="text" name="" id="" placeholder="Phone Number"/>
            <br/>
            <textarea className="textarea-field" name="" id="" cols="30" rows="10"  placeholder="Write Your Message Here..."></textarea>
            <br/>
            <Button type="submit" variant="primary">Send</Button>
            </div>
           </form>
        </div>
    );
};

export default Contact;