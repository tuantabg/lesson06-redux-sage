import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/styles";
import Styles from "./Styles";

const renderTextField = ({
     label,
     input,
     meta: { touched, invalid, error },
     ...custom
 }) => (
    <TextField
        fullWidth
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);

renderTextField.propTypes = {
    label: PropTypes.string,
    input: PropTypes.object,
    meta: PropTypes.object,
};

export default withStyles(Styles)(renderTextField);