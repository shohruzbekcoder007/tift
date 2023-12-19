import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect } from 'react';
import { useState } from 'react';

export default function AutocompleteJames({selectOptions, chageValueFunction, callback_func, label, width}) {
  // const [searchTerm, setSearchTerm] = useState('')

  // useEffect(() => {
  //     const delayDebounceFn = setTimeout(() => {
  //       callback_func(searchTerm)
  //     }, 1000)
  
  //     return () => clearTimeout(delayDebounceFn)
  //   }, [searchTerm])p


  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={selectOptions}
      sx={{
        width: width ?? '100%',
        minWidth: '300px',
        // height: '40px',
        backgroundColor: "#F6F6F6",
        fontSize: '10px',
        fontFamily: 'Inter',
        fontWeight: '500',
        color: '#151515',
        borderRadius: "10px",
        '& .MuiInputBase-root': {
            borderColor: "red",
            outlineColor: "red",
        },
        '& .MuiSelect-select': {
            padding: 0,
            color: "#151515",
            paddingRight: "22px !important",
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: "#F6F6F6",
        },
        '& .MuiOutlinedInput-notchedOutline:hover': {
            borderColor: "#F6F6F6",
        }
    }}
    isMulti
      getOptionLabel={(option) => option.name}
      filterOptions={(options, { inputValue }) =>
        options.filter(
          ({ name }) => name.toLowerCase().includes(inputValue.toLowerCase())
        )
      }
      renderInput={(params) => <TextField {...params} label={label} />}
      renderOption={(props, option) => {
        return <li {...props} key={option.value}>
          {option.name}
        </li>
      }}
      // onInputChange={handleInputChange}
      onChange={(_, newValue) => {
        // setSearchTerm(newValue?.value)
        chageValueFunction(newValue?.value)
      }}
    />
  );
}