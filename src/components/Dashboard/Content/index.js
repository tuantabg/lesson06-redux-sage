import React, {Component} from "react";
import {withStyles} from "@material-ui/styles";
import Styles from "./Styles";

class Content extends Component {
    render() {
        return (
            <div>
                Dashboard
            </div>
        );
    }
}

export default withStyles(Styles)(Content);