import React, {Component} from 'react';
import {Box, withStyles} from "@material-ui/core";
import Styles from "./Styles"
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from "@material-ui/core/Typography";
import {STATUSES} from "../../constants";
import index from "../App";

const listTask = [
    {
        id: 0,
        title: "Ready",
        description: "Ready",
        status: 0
    },
    {
        id: 1,
        title: "In Progress",
        description: "In Progress",
        status: 1
    },
    {
        id: 3,
        title: "Completed",
        description: "Completed",
        status: 2
    }
];

class TaskBoard extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.taskBoard}>
                <Button variant="contained" color="primary" classes="classes.button">
                    <AddIcon /> Thêm mới công việc
                </Button>

                {this.renderBoard()}
            </div>
        );
    }

    renderBoard = () => {
        let result = null;
        result = (
            <Grid container spacing={3}>
                {
                    STATUSES.map((status, index) => {
                        const taslFiltered = listTask.filter(task => task.status === status.value);
                        const {classes} = this.props;
                        return (
                            <Grid key={status.value} item md={4} xs={12}>
                                <Box mt={2} mb={2}>
                                    <div className={classes.status}> {status.label}</div>
                                </Box>
                                <div className={classes.wrapperListTask}>
                                    {
                                        taslFiltered.map((task)=>{
                                            const {title} = task;

                                            return(
                                                <Card key={task.id} className={classes.task}>
                                                    <CardContent>
                                                        <Grid container direction="row" justify="space-between">
                                                            <Grid item md={8}>
                                                                <Typography component="h2">
                                                                    {title}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item md={4}>
                                                                {status.label}
                                                            </Grid>
                                                        </Grid>
                                                    </CardContent>
                                                    <CardActions>
                                                        <button size="small"></button>
                                                    </CardActions>
                                                </Card>
                                            )
                                        })
                                    }
                                </div>
                            </Grid>
                        )
                    })
                }
            </Grid>
        )
        return result;
    }
}

export default withStyles(Styles)(TaskBoard);