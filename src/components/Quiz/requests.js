import axios, { headerConfig } from '../../utils/baseUrl'

export const getQuizs = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response.data)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const postQuiz = (url, data, successfulFunction, errorFunction) => {
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