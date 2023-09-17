import axios, { headerConfig } from '../../utils/baseUrl'

export const getTeacherJurnal = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}


export const createTaskGrade = (url, data, successfulFunction, errorFunction) => {
    axios.put(
        url,
        data,
        {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
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
