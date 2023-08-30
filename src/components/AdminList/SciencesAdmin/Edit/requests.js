import axios, { headerConfig } from '../../../../utils/baseUrl'

export const getAdminKafedra = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const updatescience = (url, data, successfulFunction, errorFunction) => {
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
        successfulFunction(response)
    })
    .catch((error) => {
        errorFunction(error)
    });
}