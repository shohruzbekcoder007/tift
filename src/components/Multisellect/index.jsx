import React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Chip from "@mui/material/Chip";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useFormik } from "formik";

const savedTask = {
  id: 1,
  name: "Task A",
  assignTo: [
    
  ]
};

const personList = [
  {
    id: 1,
    name: "Oliver Hansen",
    age: 32
  },
  {
    id: 2,
    name: "Van Henry",
    age: 25
  },
  {
    id: 3,
    name: "Oliver",
    age: 27
  }
];

const FormHumanSelect = ({chageValueFunction, selectOptions}) => {
  const formik = useFormik({
    initialValues: savedTask,
    onSubmit: (values) => {
      console.log("values", values);
      chageValueFunction(values)
    }
  });
  return (
    <FormControl sx={{ width: "100%" }}>
      <Select
        labelId="test-label"
        id="assignTo"
        multiple
        value={formik.values.assignTo}
        onChange={(e) => {
          console.log("set ", e.target.value);
          formik.setFieldValue("assignTo", e.target.value);
          chageValueFunction(e.target.value)
        }}
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
          },
          '& legend': {
            width: 0,
          }
      }}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((person, index) => (
              <Chip key={index} label={person.name} />
            ))}
          </Box>
        )}
        // sx={{ mt: 2 }}
      >
        {selectOptions.map((person, index) => (
          <MenuItem key={index} value={person}>
            {person.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormHumanSelect;