import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import cssModule from './ImageGallery.module.css';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

export default function ImageGallery ({items}) {
		return (
	        <div className={cssModule.gallery}>
                <ImageList cols={3}>
                    {items.map((picture) => (
                        <ImageListItem
                            key={picture.id}>
                            <ImageGalleryItem picture={ picture} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>     
            )
}
    
ImageGallery.propTypes = {
    items: PropTypes.array,    
}