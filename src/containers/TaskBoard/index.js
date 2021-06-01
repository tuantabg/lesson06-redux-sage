import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import Styles from "./Styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import {STATUSES} from "../../constants";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";

const listTask = [
    {
        id: 0,
        title: "Read Book",
        description: "Ready",
        status: 0
    },
    {
        id: 1,
        title: "Play Game",
        description: "In Progress",
        status: 1
    },
    {
        id: 3,
        title: "Play Football",
        description: "Completed",
        status: 2
    }
];

class TaskBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false
        };
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
        const {classes} = this.props;
        result = (
            <Grid className={classes.root} container spacing={3} >
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

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.taskBoard}>
                <Button variant="contained" color="primary"
                        classes="classes.button"
                        onClick={this.openForm}
                > <AddIcon /> Thêm mới công việc
                </Button>

                {this.renderBoard()}
                {this.renderForm()}
            </div>
        );
    }
}

export default withStyles(Styles)(TaskBoard);