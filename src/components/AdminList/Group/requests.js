import axios, { headerConfig } from '../../../utils/baseUrl'

export const getGroups = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}


export const getTeachers = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}


export const addGroup = (url, data, successfulFunction, errorFunction) => {
    axios.post(url, data, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}
