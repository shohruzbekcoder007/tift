import React, { useEffect, memo } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default memo(function AllSelectFullWidth({chageValueFunction, selectOptions}) {

    const [age, setAge] = React.useState(selectOptions[0]?.value || 0);

    const handleChange = (event) => {
        setAge(event.target.value);
        chageValueFunction(event.target.value)
    };

    useEffect(() => {
        setAge(selectOptions[0]?.value || 0)
    }, [selectOptions])

    return (
        <div>
            <FormControl 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    gap: "10px",
                    minWidth: "100%"
                }}
                style={{minWidth: 120}}
            >
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    fullWidth
                    
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
                >
                    {
                        selectOptions.map((elem, index) => {
                            return <MenuItem key={index} value={elem.value}>{elem.name}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </div>
    );
})










// import React, { useEffect, memo } from 'react'
// import MenuItem from '@mui/material/MenuItem'
// import FormControl from '@mui/material/FormControl'
// import Select from '@mui/material/Select'

// export default memo(function AllSelectFullWidth({chageValueFunction, selectOptions}) {

//     const selectedOption = selectOptions.find(option => option.selected) || {};
//     const [age, setAge] = React.useState(selectedOption.value || 0);
//     console.log(selectedOption);
    
//     const handleChange = (event) => {
//         setAge(event.target.value);
//         chageValueFunction(event.target.value)
//     };

//     useEffect(() => {
//         const newSelectedOption = selectOptions.find(option => option.selected) || {};
//         setAge(newSelectedOption.value || 0);
//     }, [selectOptions])

//     return (
//         <div>
//             <FormControl 
//                 sx={{ 
//                     display: 'flex', 
//                     flexDirection: 'row', 
//                     alignItems: 'center', 
//                     gap: "10px",
//                     minWidth: "100%"
//                 }}
//                 style={{minWidth: 120}}
//             >
//                 <Select
//                     labelId="demo-simple-select-autowidth-label"
//                     id="demo-simple-select-autowidth"
//                     value={age}
//                     onChange={handleChange}
//                     fullWidth
                    
//                     sx={{
//                         padding: "14px 10px",
//                         backgroundColor: "#F6F6F6",
//                         fontSize: '14px',
//                         fontFamily: 'Inter',
//                         fontWeight: '500',
//                         color: '#151515',
//                         borderRadius: "10px",
//                         // minWidth: '70px',
//                         '& .MuiInputBase-root': {
//                             // width: "100%",
//                             borderColor: "red",
//                             outlineColor: "red",
//                         },
//                         '& .MuiSelect-select': {
//                             padding: 0,
//                             color: "#151515",
//                             paddingRight: "22px !important",
//                         },
//                         '& .MuiOutlinedInput-notchedOutline': {
//                             borderColor: "#F6F6F6",
//                         },
//                         '& .MuiOutlinedInput-notchedOutline:hover': {
//                             borderColor: "#F6F6F6",
//                         }
//                     }}
//                 >
//                     {
//                         selectOptions.map((elem, index) => {
//                             return <MenuItem key={index} value={elem.value}>{elem.name}</MenuItem>
//                         })
//                     }
//                 </Select>
//             </FormControl>
//         </div>
//     );
// })