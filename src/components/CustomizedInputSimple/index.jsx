import React from "react"
import { withStyles } from '@mui/styles'
import TextField from "@mui/material/TextField"

const CssTextField = withStyles({
    root: {
        width: "100%",
        "& input.MuiInputBase-input": {
            color: "#6A6A6A",
            padding: "12px",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "170%",
            zIndex: "2",
            fontFamily: 'Inter'
        },
        "& label.Mui-focused": {
            color: "#6A6A6A",
            paddingLeft: "0"
        },
        "& .MuiFormLabel-root": {
            paddingLeft: "30px",
            paddingTop: "3px"
        },
        "& .MuiFormLabel-filled": {
            padding: 0
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                backgroundColor: "#F6F6F6",
                border: "1px solid #F6F6F6",
                borderRadius: "10px",
            },
            "&:hover fieldset": {
                border: "1px solid #F6F6F6",
            },
            "&.Mui-focused fieldset": {
                border: "1px solid #F6F6F6",
                color: "red"
            }
        }
    }
})(TextField);

export default function CustomizedInputSimple({ label, callback_func, placeholder }) {
    return (
        <div style={{ position: "relative" }}>
            <CssTextField
                // error
                label={label}
                variant="outlined"
                id="custom-css-outlined-input"
                // helperText="Incorrect entry."
                onChange={event => { callback_func(event.target.value) }}
                placeholder={placeholder}
            />
        </div>
    );
}
