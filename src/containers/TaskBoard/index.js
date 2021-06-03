import React, {Component} from "react";
import {Box, withStyles} from "@material-ui/core";
import {bindActionCreators} from "redux";
import * as taskActions from "../../actions/task";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import SearchBox from "../../components/SearchBox";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import {STATUSES} from "../../constants";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Styles from "./Styles";


class TaskBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    };

    componentDidMount() {
        const { taskActionCreators } = this.props;
        const { fetchListTask } = taskActionCreators;
        fetchListTask();
    };

    openForm = () => {
        this.setState({
            open: true
        });
    };

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    renderBoard = () => {
        let result = null;
        const {classes, listTask} = this.props;

        result = (
            <Grid className={classes.root} container spacing={3}>
                {
                    STATUSES.map((status) => {
                        const taskFiltered = listTask.filter(task => task.status === status.value);
                        return <TaskList key={status.value}
                                         tasks={taskFiltered}
                                         status={status}
                        />;
                    })
                }
            </Grid>
        );

        return result;
    };

    renderForm = () => {
        let result = null;
        const {open} = this.state;
        result = (
            <TaskForm open={open}
                      onClone={this.handleClose}
            />
        );
        return result;
    };

    handleChadle = (event) => {
        const {value} = event.target;
        const { taskActionCreators } = this.props;
        const { filterTask } = taskActionCreators;
        filterTask(value);
    };

    renderSearchBox = () => {
        let xhtml = null;
        xhtml = (
            <SearchBox handleChadle={this.handleChadle}/>
        );
        return xhtml;
    };


    render() {
        const {classes} = this.props;

        return (
            <div className={classes.taskBoard}>
                <Button variant="contained" color="primary" onClick={this.openForm} style={{margin: 20}}>
                    <AddIcon /> Thêm mới công việc
                </Button>
                {this.renderSearchBox()}
                {this.renderBoard()}
                {this.renderForm()}
            </div>
        );
    };
}

TaskBoard.propType = {
    classes: PropTypes.object,
    taskActionCreators: PropTypes.shape({
        fetchListTask: PropTypes.func,
        filterTask: PropTypes.func,
    }),
    listTask: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
      listTask: state.task.listTask
    };
};

const mapDispatchToProps = dispatch => {
    return {
        taskActionCreators: bindActionCreators(taskActions, dispatch)
    };
};


export default withStyles(Styles)(
    connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);