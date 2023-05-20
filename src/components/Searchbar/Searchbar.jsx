import React, { useState,useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { GalleryContext } from 'components/App';

export default function Searchbar() {
    const [search, setSearch] = useState('');
    const {handleSearch} = useContext(GalleryContext);
   
    const handleChange = (evt) => setSearch(evt.target.value.toLowerCase());   

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleSearch(search);  
        setSearch('');
    }
    
    return (
        <form onSubmit={handleSubmit}
              style={{ marginLeft: "600px", marginTop: "15px" }}>
            <Stack spacing={2} direction="row">
                <TextField
                    label="Enter word"
                    onChange={handleChange}
					value={search}/>
                <Button
                    type="submit"
                    variant="contained">
                    <ManageSearchIcon />
                </Button>
            </Stack>
        </form>
    )
  }

