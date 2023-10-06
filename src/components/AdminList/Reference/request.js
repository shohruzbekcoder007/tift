import axios, { headerConfig } from '../../../utils/baseUrl'

export const getReference = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response.data)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const AddStudentNB = (url, data, successfulFunction, errorFunction) => {
    axios.post(url, data, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
            "Content-Type": "multipart/form-data",
          },
    }).then(response => {
        successfulFunction(response.data)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const DeleteStudentNBPetition = (url, successfulFunction, errorFunction) => {
    axios.delete(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response.data)
    }).catch((error) => {
        errorFunction(error)
    })
}