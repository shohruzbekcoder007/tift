import axios, { headerConfig } from '../../../utils/baseUrl'

export const getFrontUpdate = (url, successfulFunction, errorFunction) => {
  axios.get(url, {
      headers: headerConfig(),
  }).then((response) => {
      successfulFunction(response)
  }).catch((error) => {
      errorFunction(error)
  })
}
