import React from "react"
import { withStyles } from '@mui/styles'
import Select from '@mui/material/Select';
import search from '../../imgs/input_search.png'
import { MenuItem } from "@mui/material";

const CssSelect = withStyles({
    root: {
        width: "100%",
    }
})(Select);

export default function CustomizedSelect({ label, callback_func }) {
    return (
        <div style={{ position: "relative" }}>
            <CssSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </CssSelect>
        </div>
    );
}
