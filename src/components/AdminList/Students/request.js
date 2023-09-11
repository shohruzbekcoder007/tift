import axios, { headerConfig } from '../../../utils/baseUrl'

export const getUsers = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then((response) => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const deleteStudent = (url, successfulFunction, errorFunction) => {
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