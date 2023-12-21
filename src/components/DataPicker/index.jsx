import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';

export default function DataPicker({ setFunction }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} sx={{width: "100%"}}>
      <DemoContainer components={['DatePicker']} sx={{width: "100%", minWidth: "300px", '&.MuiInputBase-root': {width: "100%"}}}>
        <DatePicker 
          sx={{width: "100%", zIndex: 0}} 
          views={["day","month", "year"]}
          label={'Sana'}
          renderInput={(params) => <TextField {...params} />}
          mask="__-__-____"
          format="DD/MM/YYYY"
          onChange={(newValue) => {
            setFunction(`${new Date(newValue).getFullYear()}-${new Date(newValue).getMonth() + 1}-${new Date(newValue).getDate()}`)
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
