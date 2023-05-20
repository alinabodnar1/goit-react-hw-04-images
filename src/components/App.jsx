import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMore from './LoadMore/LoadMore';
import Loader from './Loader/Loader';
import { getPictures }   from '../api/getPictures';
import { ToastContainer, toast } from 'react-toastify';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleSearch = (searchText) => {
    setSearchText(searchText.trim());
    setPictures([]);
    setIsLoading(false);
    setPage(1);
  }
  
  useEffect(() => {
    if (!searchText) {
      return;
    }
    setIsLoading(true);
    getPictures(searchText, page).then((data) => {
      console.log('data.total:', data.total);
      if (data.total === 0) {
        toast.error("Sorry, there are no images matching your search query. Please try again.");
        return;
      }
      if (data.hits) {
        console.log('data.hits:', data.hits);
        setPictures(prevPictures => [...prevPictures, ...data.hits]);
      }
    })
      .catch(() => {
        toast.error("An error occurred while responding from the backend.")
      })
      .finally(() => {
        setIsLoading(false);
      });

}, [page, searchText]);

    const loadMore = () => {
        setPage(prevPage => prevPage + 1);     
    }
 
    return (
      <div>
        <Searchbar handleSearch={handleSearch} />
           {isLoading && (
                    <div style={{marginLeft: "10px"}}>
                        <p style={{color: "green"}}>Loading...</p>
                        <Loader />
                    </div>)
            }
        <ImageGallery items={pictures} isLoading={isLoading} />

        {pictures?.length > 0 && !isLoading && (
            <LoadMore onClick={loadMore} />
        )}
       
        <ToastContainer
            autoClose={3000}
            position="top-left" />
                
      </div>
    )
  }


