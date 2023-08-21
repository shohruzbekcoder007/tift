import axios, { headerConfig } from '../../../utils/baseUrl'


export const getMyPatok = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const createTaskSubmission = (url, data, successfulFunction, errorFunction) => {
    axios.post(
        url,
        data,
        {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
                "Content-Type": "multipart/form-data",
              },
        }
    ).then((response) => {
        console.log(response)
        successfulFunction(response)
    })
    .catch((error) => {
        errorFunction(error)
    });
}


export const PutTaskSubmission = (url, data, successfulFunction, errorFunction) => {
    axios.patch(
        url,
        data,
        {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
                "Content-Type": "multipart/form-data",
              },
        }
    ).then((response) => {
        console.log(response)
        successfulFunction(response)
    })
    .catch((error) => {
        errorFunction(error)
    });
}