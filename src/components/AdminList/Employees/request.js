import axios, { headerConfig } from '../../../utils/baseUrl'

export const getEmployes = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then((response) => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const getRegionListRequest = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then((response) => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const deleteEmployee = (url, successfulFunction, errorFunction) => {
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