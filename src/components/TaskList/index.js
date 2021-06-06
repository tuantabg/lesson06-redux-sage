import React, {Component} from "react";
import {Box, withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TaskItem from "../TaskItem";
import PropTypes from "prop-types";
import Style from "./Styles";

class TaskList extends Component {
    render() {
        const {classes, tasks, status, onClickEdit, onClickDelete} = this.props;
        return (
            <Grid item md={4} xs={12} key={status.value}>
                <Box mt={2} mb={2}>
                    <div className={classes.status}> {status.label}</div>
                </Box>
                <div className={classes.wrapperListTask}>
                    {
                        tasks.map((task)=>{
                            return <TaskItem key={task.id}
                                             task={task}
                                             status={status}
                                             onClickEdit={() => onClickEdit(task)}
                                             onClickDelete={() => onClickDelete(task)}
                            />;
                        })
                    }
                </div>
            </Grid>
        );
    }
}

TaskList.propTypes = {
    classes: PropTypes.object,
    tasks: PropTypes.array,
    status: PropTypes.object,
    onClickEdit: PropTypes.func,
    onClickDelete: PropTypes.func,
};

export default withStyles(Style)(TaskList);