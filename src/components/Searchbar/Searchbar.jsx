import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

export default function Searchbar({handleSearch}) {
    const [search, setSearch] = useState('');

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
                    {/* <ImageSearchIcon /> */}
                    {/* Find */}
                </Button>
            </Stack>
        </form>
    )
  }

