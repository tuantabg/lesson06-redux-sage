import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import Styles from "./Styles";

class TaskForm extends Component {
    render() {
        const {classes} = this.props;

        return (
            <form>
                <TextField
                    fullWidth
                    margin="normal"
                    id="standard-name"
                    className={classes.textField}
                    label="Tiêu đề"
                />
                <TextField
                    fullWidth
                    rowsMax="4"
                    margin="normal"
                    id="standard-multiline-flexible"
                    className={classes.textField}
                    label="Mô tả"
                />
                <div className={classes.actionButton}>
                    <Box display="flex" flexDirection="row-reverse">
                        <Button className={classes.buttonForm} variant="contained" color="secondary">Hủy bỏ</Button>
                        <Button className={classes.buttonForm} variant="contained" color="primary">Lưu lại</Button>
                    </Box>
                </div>
            </form>
        );
    }
}

TaskForm.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(Styles)(TaskForm);