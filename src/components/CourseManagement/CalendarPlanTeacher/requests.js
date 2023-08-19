import axios, { headerConfig } from '../../../utils/baseUrl'

export const getTeacherLessons = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}


export const setTeacherDeleteLesson = (url, successfulFunction, errorFunction) => {
    
    axios.delete(
        url,
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


export const createLessonSource = (url, data, successfulFunction, errorFunction) => {
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


export const createLessonSourcePut = (url, data, successfulFunction, errorFunction) => {
    axios.put(
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