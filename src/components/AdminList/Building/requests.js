import axios, { headerConfig } from '../../../utils/baseUrl'

export const getBuildings = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}


export const patchBuilding = (url, data, successfulFunction, errorFunction) => {
    axios.patch(
        url,
        data,
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


export const DeleteBuilding = (url, successfulFunction, errorFunction) => {
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


export const postBuilding = (url, data, successfulFunction, errorFunction) => {
    axios.post(
        url,
        data,
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
