import axios, { headerConfig } from '../../../../utils/baseUrl'

export const getRooms = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}


export const patchRooms = (url, data, successfulFunction, errorFunction) => {
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

export const postRooms = (url, data, successfulFunction, errorFunction) => {
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

export const deleteRooms = (url, successfulFunction, errorFunction) => {
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