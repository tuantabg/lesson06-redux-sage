import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Style from "./Styles";

class TaskForm extends Component {
    render() {
        const {classes, open, onClone} = this.props;

        return (
            <Dialog open={open} onClose={onClone} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Thêm mới công việc</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="normal"
                        id="standard-name"
                        className={classes.textField}
                        label="Name"
                    />
                    <TextField
                        multiline
                        rowsMax="4"
                        margin="normal"
                        id="standard-multiline-flexible"
                        className={classes.textField}
                        label="Multiline"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClone} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onClone} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(Style)(TaskForm);