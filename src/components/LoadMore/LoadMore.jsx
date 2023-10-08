import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import cssModule from './LoadMore.module.css';
import { GalleryContext } from 'components/App';

export default function LoadMore() {
  const { onClick } = useContext(GalleryContext);
  return (
    <div className={cssModule.container}>
      <Button variant="contained" type="submit" onClick={onClick}>
        {' '}
        Load more
      </Button>
    </div>
  );
}
