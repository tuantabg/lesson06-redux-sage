import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import Styles from "./Styles";

class TaskItem extends Component {
    render() {
        var {classes, task,status, title} = this.props;

        return (
            <Card className={classes.task}>
                <CardContent>
                    <Grid container justify="space-between">
                        <Grid item md={8}>
                            <Typography component="h2">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            {status.label}
                        </Grid>
                    </Grid>
                    <p>{task.description}</p>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Fab className={classes.fab} color="primary" aria-label="EDIT" size="small">
                        <Icon fontSize="small">
                            edit_icon
                        </Icon>
                    </Fab>
                    <Fab className={classes.fab} color="secondary" aria-label="DELETE" size="small">
                        <Icon fontSize="small">
                            delete_icon
                        </Icon>
                    </Fab>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(Styles)(TaskItem);