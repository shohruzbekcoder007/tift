import axios, { headerConfig } from '../../../utils/baseUrl'

export const getDirections = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response.data)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const getFakulty = (url, successfulFunction, errorFunction) => {
  axios.get(url, {
      headers: headerConfig(),
  }).then(response => {
      successfulFunction(response.data)
  }).catch((error) => {
      errorFunction(error)
  })
}



export const AddDirection = (url, data, successfulFunction, errorFunction) => {

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

export const DeleteDirection = (url, successfulFunction, errorFunction) => {
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