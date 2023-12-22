import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutocompleteJames({selectOptions, chageValueFunction, callback_func, label, width}) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={selectOptions}
      sx={{
        width: '300px',
        minWidth: width ? width : '300px',
        // height: '40px',
        backgroundColor: "#f6f6f6",
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
        },
    }}
    isMulti
      getOptionLabel={(option) => option.name}
      filterOptions={(options, { inputValue }) =>
        options.filter(
          ({ name }) => name.toLowerCase().includes(inputValue.toLowerCase())
        )
      }
      renderInput={(params) => <TextField  {...params} label={label} />}
      renderOption={(props, option) => {
        return <li {...props} key={option.value}>
          {option.name}
        </li>
      }}
      onChange={(_, newValue) => {
        chageValueFunction(newValue?.value)
      }}
    />
  );
}