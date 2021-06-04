import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import { Field, reduxForm } from "redux-form";
import {compose, bindActionCreators} from "redux";
import * as modalActions from "../../actions/modal";
import renderTextField from "../../components/FormHelper/TextField";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Styles from "./Styles";


class TaskForm extends Component {
    handleSubmitForm = (data) => {
        console.log("data", data);
    };

    render() {
        const {classes, hideModal, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <Field id="title"
                       className={classes.textField}
                       component={renderTextField}
                       margin="normal"
                       label="Tiêu đề"
                       name="title"
                       type="text"
                />
                <Field id="description"
                       className={classes.textField}
                       component={renderTextField}
                       name="description"
                       margin="normal"
                       label="Mô tả"
                       rowsMax="4"
                       type="text"
                       multiline
                />
                <div className={classes.actionButton}>
                    <Box display="flex" flexDirection="row-reverse">
                        <Button className={classes.buttonForm} variant="contained" color="secondary" onClick={hideModal}>Hủy bỏ</Button>
                        <Button className={classes.buttonForm} variant="contained" color="primary" type="submit">Lưu lại</Button>
                    </Box>
                </div>
            </form>
        );
    }
}

TaskForm.propTypes = {
    classes: PropTypes.object,
    modalActionCreators: PropTypes.shape({
       hideModal: PropTypes.func,
    }),
    handleSubmit: PropTypes.func,
};

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
    return {
        modalActionCreators: bindActionCreators(modalActions ,dispatch)
    };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const FORM_NAME = "TASK_MANAGEMENT";

const withReduxForm = reduxForm({
    form: FORM_NAME,
});

export default compose(
    withStyles(Styles),
    withConnect,
    withReduxForm,
)(TaskForm);