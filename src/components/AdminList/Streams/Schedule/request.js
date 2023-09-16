import axios, { headerConfig } from '../../../../utils/baseUrl'

export const getPara = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const getRooms = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const getScheduleGroup = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const postSchudelTable = (url, data, successfulFunction, errorFunction) => {
    axios.post(url, data, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}