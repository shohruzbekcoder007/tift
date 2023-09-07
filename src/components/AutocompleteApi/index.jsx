import { Autocomplete, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getStudentsList } from './requests'
import { allusers } from '../../utils/API_urls'

export default function AutocompleteApi() {

    const [itemsAutocomplete, setItemsAutocomplete] = useState([])

    useEffect(() => {
        getStudentsList(`${allusers}?role__name=student`, response => {
            setItemsAutocomplete(response.data.results)
        }, error => {

        })
    },[])

    const handleItemsOptions = event => {

        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         name : search_name,
        //     }),
        // }
    
            getStudentsList(`${allusers}?role_name=student&page_size=50`, response => {
                console.log(response.data.results, "<<---")
                setItemsAutocomplete(response.data.results)
            }, error => {
    
            })
       
        // fetch(
        //     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/items/search/`,
        //     requestOptions,
        // )
        //     .then(response => response.json())
        //     .then(json => setItemsAutocomplete(json))
    }

    return (
        <Autocomplete
            disablePortal
            id="autocomplete-search"
            onChange={handleItemsOptions}
            getOptionLabel={option => option.response.data.results}
            sx={{ width: 300 }}
            renderInput={params => (
                <TextField {...params} label="Search an item..." />
            )}
        />
    )
}
