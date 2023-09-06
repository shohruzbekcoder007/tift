import axios, { headerConfig } from '../../../../utils/baseUrl'

export const getAcademic_Plan = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then((response) => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

// export const getRegionListRequest = (url, successfulFunction, errorFunction) => {
//     axios.get(url, {
//         headers: headerConfig(),
//     }).then((response) => {
//         successfulFunction(response)
//     }).catch((error) => {
//         errorFunction(error)
//     })
// }

export const editAcademic_Plan = (url, data, successfulFunction, errorFunction) => {

    axios.patch(
        url,
        data,
        {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
                "Content-Type": "multipart/form-data",
              },
        }
    ).then((response) => {
        successfulFunction(response)
    })
    .catch((error) => {
        errorFunction(error)
    });
}


export const deletAcademic_Plan = (url, successfulFunction, errorFunction) => {

    axios.delete(
        url,
        {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
                "Content-Type": "multipart/form-data",
              },
        }
    ).then((response) => {
        successfulFunction(response)
    })
    .catch((error) => {
        errorFunction(error)
    });
}

export const addAcademic_Plan = (url, data, successfulFunction, errorFunction) => {

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
        successfulFunction(response)
    })
    .catch((error) => {
        errorFunction(error)
    });
}