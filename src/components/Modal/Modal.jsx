import React, { useEffect } from 'react';
import cssModule from './Modal.module.css';
import PropTypes from 'prop-types';

export default function Modal({ children, onClose }) {
	
	const handleBackDrop = evt => {
		if (evt.currentTarget === evt.target) {
			onClose();
		}
	}
	useEffect(() => {
		const handleKeyDown = evt => {
			if (evt.code === 'Escape') {
				onClose();
			}
		}
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			 window.removeEventListener('keydown', handleKeyDown);
		}
		
	}, [onClose]);

	return (
		  <div className={cssModule.backdrop} onClick={handleBackDrop}>
			  <div className={cssModule.modal}>
				  {children}
			  </div>
		  </div>
	  )
}
  
Modal.propTypes = {
	children: PropTypes.element.isRequired,
}