import axios, { headerConfig } from '../../../../utils/baseUrl'
export const createscience = (url, data, successfulFunction, errorFunction) => {
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