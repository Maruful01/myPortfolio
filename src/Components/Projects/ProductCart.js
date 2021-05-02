import React, { useState } from 'react';
import styles from "./Projects.module.css";
import { Button } from 'react-bootstrap';
import ProductDetails from './ProductDetails';

const ProductCart = ({products}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    var subtitle;
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
            <div className={styles.projectCart}>
                        <div className={styles.projectDetails}>
                        <h3>{products.name}</h3>
                        <p>{products.line1}</p>
                        <p>{products.line2}</p>
                        <p>{products.line3}</p>
                        <div className={styles.btn}>
                        <a href={products.live}><Button style={{margin: "10px"}} variant="info">View Live Site</Button>
                        </a>
                        <a href={products.git}><Button style={{margin: "10px 10px 10px 0px"}} variant="success">Git Hub Link</Button></a>
                        </div>
                
                        </div>
                       <a href={products.live}> <img className={styles.projectIMG}  src={products.img} alt=""/> </a> 
                       <Button onClick={openModal} className={styles.detailsButton} variant="outline-info">Description</Button>
                       <ProductDetails modalIsOpen={modalIsOpen} closeModal={closeModal}  product={products}></ProductDetails>
                    </div>
    );
};

export default ProductCart;