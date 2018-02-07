import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                                <Link to='/'>Default</Link>
                            </li>
                            <li className="active">
                                <Link to='/registration'>current</Link>
                            </li>
                            <li>
                                <Link to='/dashboard'>Fixed</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default TopHeaderNav;