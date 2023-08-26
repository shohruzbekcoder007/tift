import { allusers, role } from "../../../utils/API_urls"
import { getDekanList, getRoles } from "./request"

export const roleUserList = async (user_role) => {
    const userRoles = await getRoles(role) || []
    const userRole = userRoles.data.find((element) => element.name == `${user_role}`)
    const dekanListresult = await getDekanList(`${allusers}?role=${userRole?.id}`)
    return dekanListresult.data.results
  }