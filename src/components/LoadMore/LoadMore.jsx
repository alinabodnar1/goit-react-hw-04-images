import React from 'react';
import Button from '@mui/material/Button';
import cssModule from './LoadMore.module.css';
import PropTypes from 'prop-types';

export default function LoadMore ({onClick}) {
        return (
            <div className={cssModule.container}>
                 <Button 
                    variant="contained"
                    type="submit"
                    onClick={onClick}
                > Load more
            </Button >
            </div>
           
        )
    }

LoadMore.propTypes = {
    loadMore: PropTypes.func,
}
