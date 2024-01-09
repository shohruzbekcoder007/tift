import { ActionTypes } from "../contants/action-types"

// `${additional_student}?page_size=${pageSize}&search=${searchText}&page=${page}&specialty=${DirectionID}&academic_group=${GroupID}&year_of_admission=${AcademekYear}&degree=${DegreeSelect}&study_type=${StudyTypeSelect}&gender=${Gender}&form_of_payment=${FormPayment}`

const initialTable = {
    pageSize: 10,
    searchText: "",
    page: 1,
    DirectionID: "&",
    GroupID: "",
    AcademekYear: 0,
    DegreeSelect: "",
    StudyTypeSelect: "",
    Gender: "&",
    FormPayment: "&"
}


export const TableReducer = (state = initialTable, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_TABLE:
            console.log(payload);
            return payload
        default:
            return state;
    }
}