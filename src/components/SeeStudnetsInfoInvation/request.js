import axios, { headerConfig } from '../../utils/baseUrl'

export const getAcademic_Year = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then((response) => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const patchStudentINfoInvition = (url, data, successfulFunction, errorFunction) => {
    axios.patch(url, data, {
        headers: headerConfig(),
    }).then((response) => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

// export const deleteEmployee = (url, successfulFunction, errorFunction) => {
//     axios.delete(
//         url,
//         {
//         headers: headerConfig(),
//     }).then(response => {
//         successfulFunction(response.data)
//     }).catch((error) => {
//         errorFunction(error)
//     })
// }

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