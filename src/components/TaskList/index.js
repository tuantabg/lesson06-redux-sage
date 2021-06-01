import React, {Component} from "react";
import {Box, withStyles} from "@material-ui/core";
import Style from "./Styles";
import Grid from "@material-ui/core/Grid";
import TaskItem from "../TaskItem";

class TaskList extends Component {
    render() {
        const {classes, tasks, status} = this.props;
        return (
            <Grid item md={4} xs={12}>
                <Box mt={2} mb={2}>
                    <div className={classes.status}> {status.label}</div>
                </Box>
                <div className={classes.wrapperListTask}>
                    {
                        tasks.map((task)=>{
                            const {title} = task;
                            return <TaskItem key={task.id}
                                             task={task}
                                             status={status}
                                             title={title}
                            />;
                        })
                    }
                </div>
            </Grid>
        );
    }
}

export default withStyles(Style)(TaskList);