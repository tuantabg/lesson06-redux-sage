import React, {Component} from "react";
import {withStyles} from "@material-ui/styles";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";
import styles from "./Styles";

class SearchBox extends Component {
    render() {
        const {classes, handleChadle} = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <InputBase
                    autoComplete="off"
                    className={classes.input}
                    placeholder="Nhập từ khóa ..."
                    inputProps={{ "aria-label": "Search Box" }}
                    onChange={handleChadle}
                />
            </form>
        );
    }
}

SearchBox.propTypes = {
    classes: PropTypes.object,
    handleChadle: PropTypes.func,
};

export default withStyles(styles)(SearchBox);