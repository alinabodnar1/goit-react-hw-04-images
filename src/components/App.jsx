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
    setIsLoading(true);
    getPictures(searchText, page).then((data) => {
      // console.log('data.total:', data.total);
      if (data.total === 0) {
        toast.error("Sorry, there are no images matching your search query. Please try again.");
        return;
      }
      if (data.hits) {
        // console.log('data.hits:', data.hits);
        setPictures(prevPictures => [...prevPictures, ...data.hits]);
        setPage(prevPage => prevPage + 1);
      }
    })
      .catch(() => {
        toast.error("An error occurred while responding from the backend.")
      })
      .finally(() => {
        setIsLoading(false);
      });
  
}, [page, searchText, isLoading]);
  
  // const loadPictures = () => {
   
  // }

  //  componentDidUpdate(_, prevState) {
  //       const search = this.state.searchText.trim();
  //       if (prevState.searchText !== search || prevState.page !== this.state.page) {
  //           this.loadPictures();
  //       } 
  //  }
  // loadPictures = () => {
  //       const search = this.state.searchText.trim();
  //       const { page } = this.state;
  //       this.setState({ isLoading: true });

  //       getPictures(search, page)
  //           .then((data) => {
  //               if (data.total === 0) {
  //                   toast.error("Sorry, there are no images matching your search query. Please try again.");
  //                   return;
  //               }

  //               if (data.hits) {
  //                   this.setState(prevState => ({
  //                       pictures: [...prevState.pictures, ...data.hits]
  //                   }));
  //               }
  //           })
  //           .catch(() => {
  //               toast.error("An error occurred while responding from the backend.")
  //           })
  //           .finally(() => {
  //               this.setState({
  //                   isLoading: false
  //               });
  //              })
	// 	}

    // loadMore = () => {
    //     this.setState((prevState) => {
    //         return {
    //             page: prevState.page + 1
    //         };
    //     });
    // };
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


