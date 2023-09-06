import axios, { headerConfig } from '../../../../utils/baseUrl'

export const getAcademic_Science = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then((response) => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const getAcademic_ShortScience = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then((response) => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const addAcademic_Science = (url,data, successfulFunction, errorFunction) => {
    axios.post(url, data, {
        headers: headerConfig(),
    }).then((response) => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}



export const editAcademic_Science = (url,data, successfulFunction, errorFunction) => {
    axios.patch(url, data, {
        headers: headerConfig(),
    }).then((response) => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}



export const deleteAcademic_Science = (url, successfulFunction, errorFunction) => {
    axios.delete(
        url,
        {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response.data)
    }).catch((error) => {
        errorFunction(error)
    })
}

// export const createEmployee = (url, data, successfulFunction, errorFunction) => {

//     axios.post(
//         url,
//         data,
//         {
//             headers: {
//                 Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
//                 "Content-Type": "multipart/form-data",
//               },
//         }
//     ).then((response) => {
//         successfulFunction(response)
//     })
//     .catch((error) => {
//         errorFunction(error)
//     });
// }