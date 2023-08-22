import axios, { headerConfig } from '../../../utils/baseUrl'

export const getDekanList = async (url) => {
    return await axios.get(url, {
        headers: headerConfig(),
    })
}