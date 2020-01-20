import {menuList} from '../../data/menuList';
import actionConstants from '../constants/menuConstants';
import axios from 'axios';

export const getMenus = () => {
    return {
        type: actionConstants.GET_MENU_ITEMS,
        payload: menuList
    }
};

export const getEmployees = () => dispatch => {
    axios.get('http://dummy.restapiexample.com/api/v1/employees').then(res=>{
         if(res.status===200) {
             dispatch({type: actionConstants.GET_EMPLOYEE_SUCCESS, payload: res.data.data});
         } else {
            dispatch({type: actionConstants.GET_EMPLOYEE_FAILURE, payload: []});
         }
    })
}