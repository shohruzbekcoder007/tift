import axios, { headerConfig } from '../../utils/baseUrl'

export const getSemester = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const getScienceShortName = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const getTeacherSyllabus = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const createSyllabus = (url, data, successfulFunction, errorFunction) => {
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