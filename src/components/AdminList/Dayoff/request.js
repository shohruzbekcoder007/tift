import axios, { headerConfig } from '../../../utils/baseUrl'

export const getHolidays = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response.data)
    }).catch((error) => {
        errorFunction(error)
    })
}


export const postHolidays = (url, data, successfulFunction, errorFunction) => {
    axios.post(
        url,
        data,
        {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response.data)
    }).catch((error) => {
        errorFunction(error)
    })
}


export const deleteHolidays = (url, successfulFunction, errorFunction) => {
    axios.delete(
        url,
        {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response.data)
    }).catch((error) => {
        errorFunction(error)
    })
}