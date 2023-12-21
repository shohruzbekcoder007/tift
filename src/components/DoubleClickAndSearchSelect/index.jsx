import React, { Component, useState } from "react";
import Select from "react-select";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


const DoubleClickAndSearchSelect = ({ selectOptions, chageValueFunction, callback_func, label, width }) => {
  const [value, setValue] = useState('');
  
  const handleChange = (event) => {
    console.log(event);
    // setValue(event.target.value);
    chageValueFunction(event)
  };


  const handleInputChange = (newValue, { action }) => {
    if (action === 'input-change') {
      setValue(newValue);
    }
  };

  return (
    <Select
      onChange={handleChange}
      sx={{
        padding: "14px 10px",
        backgroundColor: "#F6F6F6",
        fontSize: '14px',
        fontFamily: 'Inter',
        fontWeight: '500',
        color: '#151515',
        borderRadius: "10px",
        // minWidth: '70px',
        '& .MuiInputBase-root': {
          // width: "100%",
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

      name="colors"
      isMulti
      options={selectOptions}
      className="basic-multi-select"
      classNamePrefix="select"
      closeMenuOnSelect={false}
      onInputChange={handleInputChange}
      inputValue={value}
    />
  );
};

export default DoubleClickAndSearchSelect;
