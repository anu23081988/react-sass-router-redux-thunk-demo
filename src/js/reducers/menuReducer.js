import actionConstants from '../constants/menuConstants';

let initial_state = {
    menuList: [],
    employeeList: []
}
export default function menuReducer(state=initial_state,action) {
    switch(action.type) {
        case actionConstants.GET_MENU_ITEMS:
            return {
                ...state,
                menuList: action.payload
            }
        case actionConstants.GET_EMPLOYEE_SUCCESS:
        case actionConstants.GET_EMPLOYEE_FAILURE:
            return {
                ...state,
                employeeList: action.payload
            }
        default:
            return state;
    }
}