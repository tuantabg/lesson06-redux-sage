import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CloneIcon from "@material-ui/icons/Clear";
import PropTypes from "prop-types";
import Styles from "./Styles";

class TaskForm extends Component {
    render() {
        const {classes, open, onClone} = this.props;

        return (
            <Modal open={open} onClose={onClone}>
                <form className={classes.paperForm}>
                    <Box display="flex" alignItems="center" className={classes.header}>
                        <Box flexGrow={1}>
                            <h4 className={classes.title}>Thêm mới</h4>
                        </Box>
                        <Box className={classes.iconClone}>
                            <Button className={classes.btnClone} onClick={onClone}><CloneIcon/></Button>
                        </Box>
                    </Box>
                    <div className={classes.container}>
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
                                <Button className={classes.buttonForm} variant="contained" color="secondary" onClick={onClone}>Hủy bỏ</Button>
                                <Button className={classes.buttonForm} variant="contained" color="primary">Lưu lại</Button>
                            </Box>
                        </div>
                    </div>
                </form>
            </Modal>
        );
    }
}

TaskForm.propTypes= {
    open: PropTypes.bool,
    classes: PropTypes.object,
    onClose: PropTypes.func,
};

export default withStyles(Styles)(TaskForm);