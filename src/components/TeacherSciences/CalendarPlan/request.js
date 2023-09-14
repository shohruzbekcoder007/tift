import axios, { headerConfig } from '../../../utils/baseUrl'

export const patchTeacheravCalendar = (url, data, successfulFunction, errorFunction) => {
    axios.patch(url, data, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}
