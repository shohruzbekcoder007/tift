import axios, { headerConfig } from '../../../../utils/baseUrl'

export const getKafedraList = async (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then((response) => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const updateDepartmentInformation = (url, data, successfulFunction, errorFunction) => {
    axios.put(url, data, {
        headers: headerConfig()
    }).then(response => {
        successfulFunction(response)
    }).catch(error => {
        errorFunction(error)
    })
}

export const deleteDepartment = (url, successfulFunction, errorFunction) => {
    axios.delete(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const createDepartment = (url, data, successfulFunction, errorFunction) => {
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