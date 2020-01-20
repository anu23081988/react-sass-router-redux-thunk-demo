import React from 'react';
import {NavLink} from 'react-router-dom';

export default class MenuComponent extends React.Component {
    state = {focusedIndex: 0}
    
    onMenuClicked = (event,index) => {
        this.setState({focusedIndex: index});
    }
    render() {
        return (
            <div className="navbar menu-container">
                <ul className="nav navbar-nav">
                    {
                        this.props.menuList.map((elem,index)=>{
                            const className = this.state.focusedIndex === index ? 'active':'';

                            return (<li key={index} onClick={(e)=>this.onMenuClicked(e,index)} className={className}>
                                    <NavLink key={`nav${index}`} to={elem.url}>{elem.name}</NavLink>
                                </li>);
                        })
                    }
                </ul>
            </div>
        )
    }
}
