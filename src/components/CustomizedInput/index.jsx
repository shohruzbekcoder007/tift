import React from "react"
import { withStyles } from '@mui/styles'
import TextField from "@mui/material/TextField"
import search from '../../imgs/input_search.png'

const CssTextField = withStyles({
    root: {
        width: "100%",
        "& input.MuiInputBase-input": {
            color: "#6A6A6A",
            paddingTop: "12px",
            paddingBottom: "12px",
            paddingLeft: "36px",
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

export default function CustomizedInput({ label, callback_func }) {
    return (
        <div style={{ position: "relative" }}>
            <img src={search} style={{position: "absolute", top: "12px", left: "12px", zIndex: "2"}} alt="search iconc" />
            <CssTextField
                // error
                label={label}
                variant="outlined"
                id="custom-css-outlined-input"
                // helperText="Incorrect entry."
                onChange={event => { callback_func(event.target.value) }}
                placeholder="Qidirish"
            />
        </div>
    );
}
