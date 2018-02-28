import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TopHeaderNav extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <a className="navbar-brand" href="#">Project Name</a>
                    <div className="navbar-collapse collapse" id="navbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <NavLink to='/' exact={true} activeClassName="selected">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/custom' activeClassName="selected">Custom Validation</NavLink>
                            </li>
                            <li>
                                <NavLink to='/redux' activeClassName="selected">Redux Validation</NavLink>
                            </li>
                            <li>
                                <NavLink to='/email' activeClassName="selected">Email</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default TopHeaderNav;