import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import MenuComponent from './MenuComponent.jsx';
import {menuList} from '../../data/menuList';
import * as actions from '../actions/menuActions';

class LayoutComponent extends React.Component {
    componentDidMount(){
        this.props.getMenuItems();
        this.props.getEmployeeList();
    }
    render() {
        console.log(this.props.employeeList);
        return (
            <div className="container main-container">
                <MenuComponent menuList = {this.props.menuList}/>
                <main>
                    {this.props.children}
                </main>
                <div className="dv-footer">Footer</div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        menuList: state.menuReducer.menuList,
        employeeList: state.menuReducer.employeeList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getMenuItems: () => dispatch(actions.getMenus()),
        getEmployeeList: () => dispatch(actions.getEmployees())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LayoutComponent);
