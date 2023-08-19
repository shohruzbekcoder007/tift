import axios, { headerConfig } from '../../../utils/baseUrl'

export const getDirections = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response.data)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const getFakulty = (url, successfulFunction, errorFunction) => {
  axios.get(url, {
      headers: headerConfig(),
  }).then(response => {
      successfulFunction(response.data)
  }).catch((error) => {
      errorFunction(error)
  })
}