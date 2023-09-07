import axios, { headerConfig } from '../../../utils/baseUrl'

export const getSemesters = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}


export const getTeachersList = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const getTeacherGroups = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}


export const setNbPetition = (url, data, successfulFunction, errorFunction) => {

    axios.post(
        url,
        data,
        {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
              },
        }
    ).then((response) => {
        successfulFunction(response)
    })
    .catch((error) => {
        errorFunction(error)
    });
}

export const changeNbPetition = (url, data, successfulFunction, errorFunction) => {

    axios.patch(
        url,
        data,
        {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
              },
        }
    ).then((response) => {
        successfulFunction(response)
    })
    .catch((error) => {
        errorFunction(error)
    });
}