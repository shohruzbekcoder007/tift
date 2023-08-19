import axios, { headerConfig } from '../../../utils/baseUrl'

export const getDekanList = async (url) => {
    return await axios.get(url, {
        headers: headerConfig(),
    })
}

export const getRoles = async (url) => {
    const roles = await axios.get(url, {
        headers: headerConfig()
    })
    return roles;
}

export const fakultyCreate = (url, data, successfulFunction, errorFunction) => {
    axios.post(url, data, {
        headers: headerConfig()
    }).then(response => {
        successfulFunction(response)
    }).catch(error => {
        errorFunction(error)
    })
}