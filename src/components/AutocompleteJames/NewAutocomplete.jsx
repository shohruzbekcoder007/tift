import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Option 1', 'Option 2'];

export default function NewAutocomplete({selectOptions, chageValueFunction, label, width, defaultValue}) {
  const [value, setValue] = React.useState(defaultValue);
  const [inputValue, setInputValue] = React.useState(''+defaultValue);

  console.log(defaultValue, "<<<--")
  React.useEffect(() => {
    let selectedDV
    if(defaultValue != '&'){
        selectedDV = selectOptions.find(elem => elem.value == '' || elem.value == '&')
    }else{
        selectedDV = selectOptions.find(elem => elem.value == defaultValue)
    }
    console.log(selectedDV, "selectedDV", selectOptions)
    setValue(selectedDV)
    
    
  }, [defaultValue, selectOptions])

  return (
    <div>
      <Autocomplete
        value={value}
        // defaultValue={selectOptions[0]}
        onChange={(event, newValue) => {
          setValue(newValue);
          chageValueFunction(newValue?.value)
        }}
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
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        getOptionLabel={(option) => option.name}
        filterOptions={(options, { inputValue }) =>
            options.filter(
            ({ name }) => name.toLowerCase().includes(inputValue.toLowerCase())
            )
        }
        id="controllable-states-demo"
        options={selectOptions}
        renderInput={(params) => <TextField {...params} label={label} defaultValue={inputValue}/>}
      />
    </div>
  );
}