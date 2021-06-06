import React, {Component} from "react";
import {Route} from "react-router-dom";
import Dashboard from "../../../components/Dashboard";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Styles from "./Styles";

class AdminLayoutRouter extends Component {
    render() {
        const {component: YourComponent, ...reNameProos} = this.props;
        return (
            <Route
                {...reNameProos}
                render={routeProps => {
                    return (
                        <Dashboard {...reNameProos}>
                            <YourComponent {...routeProps}/>
                        </Dashboard>
                    );
                }}
            />
        );
    }
}

AdminLayoutRouter.propTypes = {
    path: PropTypes.string,
    name: PropTypes.string,
    exact: PropTypes.bool,
    component: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),
};

export default withStyles(Styles)(AdminLayoutRouter);