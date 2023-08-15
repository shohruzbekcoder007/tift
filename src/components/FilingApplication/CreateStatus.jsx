import React from 'react'
import { useSelector } from 'react-redux'

export default function CreateStatus({element}) {

    const lang = useSelector(state => state.language);
    if(element)
        return (
            <span>{element[lang]}</span>
        )
    else
        (<></>)
}
