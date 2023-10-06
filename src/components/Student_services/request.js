import axios, { headerConfig } from '../../utils/baseUrl'
export const postStudentInformation = (url, data, successfulFunction, errorFunction) => {
  axios.post(url, data, {
      headers: headerConfig(),
  }).then((response) => {
      successfulFunction(response)
  }).catch((error) => {
      errorFunction(error)
  })
}