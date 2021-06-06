import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import Styles from "./Styles";

class AdminHomePage extends Component {
    render() {
        return (
            <h1>Admin Home Page</h1>
        );
    }
}

export default withStyles(Styles)(AdminHomePage);