import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import cssModule from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ picture }) {
    const [isShowModal, setIsShowModal] = useState(false);
    
    const toggleModal = () => {
        setIsShowModal(!isShowModal);
    }  
        return (
            <>
                <img className={cssModule['small-image']}
                    src={picture.webformatURL}
                    alt={picture.title}
                    loading="lazy"
                    onClick={toggleModal}
                    width="400"
                />
                {isShowModal &&
                    (<Modal onClose={toggleModal}> 
                        <img
                            src={picture.largeImageURL}
                            alt={picture.title}
                            width="800"
                        />
                    </Modal>)}
            </>
        )
  }

ImageGalleryItem.propTypes = {
    picture: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
    }),
}
