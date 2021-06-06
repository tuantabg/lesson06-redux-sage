import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/styles";
import Styles from "./Styles";


const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return null;
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>;
    }
};

renderFromHelper.propTypes = {
    touched: PropTypes.bool,
    error: PropTypes.bool,
};


const renderSelectField = ({
   input,
   label,
   classes,
   meta: { touched, error },
   children,
   ...custom
}) => (
    <FormControl className={classes.formControl} error={touched && error}>
        <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
        <Select
            {...input}
            {...custom}
            inputProps={{
                name: "age",
                id: "age-native-simple"
            }}
            value={input.value}
        >
            {children}
        </Select>
        {renderFromHelper({ touched, error })}
    </FormControl>
);

renderSelectField.propTypes = {
    label: PropTypes.string,
    input: PropTypes.object,
    meta: PropTypes.object,
    children: PropTypes.array,
    classes: PropTypes.object,
};

export default withStyles(Styles)(renderSelectField);