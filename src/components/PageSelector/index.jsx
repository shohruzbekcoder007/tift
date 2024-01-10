import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { SelectorText } from './styles';
import listLanguage from './language.json'
import { useSelector } from 'react-redux';

export default function PageSelector({chageValueFunction, defPage }) {
    const [age, setAge] = React.useState(defPage?defPage:10);
    const language = useSelector(state => state.language)

    const handleChange = (event) => {
        setAge(event.target.value);
        chageValueFunction(event.target.value)
    };

//     const styles = {
//     order: 2,
//     '@media (max-width: 600px)': {
//         width: "100%"
//     },
// }

    return (
        <div >

            
            <FormControl sx={{ 
                
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                gap: "10px",
                // float: "right"
            }}>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    autoWidth
                    sx={{
                        padding: "14px 10px",
                        backgroundColor: "#F6F6F6",
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        fontWeight: '500',
                        color: '#151515',
                        borderRadius: "10px",
                        // order: 2,
                        // minWidth: '70px',
                        '@media screen and (max-width: 576px)': { 
                            fontSize: "12px", 
                            margin: "0.5rem 0"
                          }, 
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
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={500}>500</MenuItem>
                </Select>
                <SelectorText>{listLanguage.Row[language]}</SelectorText>
            </FormControl>
        </div>
    );
}