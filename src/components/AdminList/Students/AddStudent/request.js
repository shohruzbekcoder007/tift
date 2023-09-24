import axios, { headerConfig } from '../../../../utils/baseUrl'
export const getRegionListRequest = (url, successfulFunction, errorFunction) => {
  axios.get(url, {
      headers: headerConfig(),
  }).then((response) => {
      successfulFunction(response)
  }).catch((error) => {
      errorFunction(error)
  })
}


export const createStudent = (url, data, successfulFunction, errorFunction) => {

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

