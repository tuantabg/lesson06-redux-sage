import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import { Field, reduxForm } from "redux-form";
import {compose, bindActionCreators} from "redux";
import * as modalActions from "../../actions/modal";
import * as taskActions from "../../actions/task";
import renderTextField from "../../components/FormHelper/TextField";
import renderSelectField from "../../components/FormHelper/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Styles from "./Styles";


class TaskForm extends Component {
    handleSubmitForm = (data) => {
        const {taskEditing, taskActionCreators} = this.props;
        const {addTask, updateTask} = taskActionCreators;
        const {title, description, status} = data;
        if (taskEditing && taskEditing.id) {
            updateTask(title, description, status);
        }else {
            addTask(title, description);
        }
    };

    renderStatusSelection = () => {
        let xhtml = null;
        const {taskEditing, classes} = this.props;
        if (taskEditing && taskEditing.id){
            xhtml = (
                <Field id="status"
                       name="status"
                       className={classes.select}
                       component={renderSelectField}
                       label="Trạng thái"
                >
                    <MenuItem value={0}>Ready</MenuItem>
                    <MenuItem value={1}>In Progress</MenuItem>
                    <MenuItem value={2}>Completed</MenuItem>
                </Field>
            );
        }
        return xhtml;
    };

    render() {
        const {classes, handleSubmit, modalActionCreators} = this.props;
        const {hideModal} = modalActionCreators;

        return (
            <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <Field id="title"
                       component={renderTextField}
                       margin="normal"
                       label="Tiêu đề"
                       name="title"
                       type="text"
                />
                <Field id="description"
                       component={renderTextField}
                       name="description"
                       margin="normal"
                       label="Mô tả"
                       rowsMax="4"
                       type="text"
                       multiline
                />

                {this.renderStatusSelection()}

                <Box display="flex" flexDirection="row-reverse" m={3}>
                    <Button variant="contained" color="secondary" onClick={hideModal} style={{margin: "15px 0 0 15px"}}>Hủy bỏ</Button>
                    <Button variant="contained" color="primary" type="submit" style={{margin: "15px 0 0"}}>Lưu lại</Button>
                </Box>
            </form>
        );
    }
}

TaskForm.propTypes = {
    classes: PropTypes.object,
    modalActionCreators: PropTypes.shape({
       hideModal: PropTypes.func,
    }),
    taskActionCreators: PropTypes.shape({
        addTask: PropTypes.func,
        updateTask: PropTypes.func,
    }),
    handleSubmit: PropTypes.func,
    taskEditing: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        taskEditing: state.task.taskEditing,
        initialValues: {
            title: state.task.taskEditing ? state.task.taskEditing.title : null,
            description: state.task.taskEditing ? state.task.taskEditing.description : null,
            status: state.task.taskEditing ? state.task.taskEditing.status : null,
        },
    };
};
const mapDispatchToProps = dispatch => {
    return {
        modalActionCreators: bindActionCreators(modalActions ,dispatch),
        taskActionCreators: bindActionCreators(taskActions, dispatch),
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