import React, { useState } from 'react';
import styles from "./Projects.module.css";
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  
  Modal.setAppElement('#root')


const ProductDetails = ({modalIsOpen, closeModal, product}) => {
    

    return (
        <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <button className={styles.closeModal}  onClick={closeModal}><i class="fas fa-times"></i></button>
        <p>{product.line1}</p>
        <p>{product.line2}</p>
        <p>{product.line3}</p>
          
        </Modal>
        </div>

    );
};

export default ProductDetails;