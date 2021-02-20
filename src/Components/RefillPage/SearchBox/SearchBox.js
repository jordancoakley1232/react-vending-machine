import React from 'react';
import TextField from '@material-ui/core/TextField';

const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <div>
            <TextField id="outlined-basic" label={placeholder} variant="outlined" onChange={handleChange} style={{ marginTop: '1rem' }} />
        </div>
    )
}

export default SearchBox
