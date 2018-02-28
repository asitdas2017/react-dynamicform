import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, HashRouter, IndexRoute } from 'react-router-dom';

/* These import for Meterial design */
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/* End */

import TopHeaderNav from './components/navigations/TopHeaderNav';
import Home from "./components/home/Home";
import CustomValidation from "./components/validation-custom/CustomValidation";
import ReduxValidation from "./components/validation-redux/ReduxValidation";
import NodemailerEmail from "./components/validation-material-nodemailer/NodemailerEmail";
import css from "./styles/app.css";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div>
                        <TopHeaderNav />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/custom" component={CustomValidation} />
                                <Route path="/redux" component={ReduxValidation} />
                                <Route path="/email" component={NodemailerEmail} />
                            </Switch>
                        </div>
                    </div>
                </MuiThemeProvider>
            </HashRouter>
        )
    }
};

ReactDOM.render(< App />, document.getElementById('root'));