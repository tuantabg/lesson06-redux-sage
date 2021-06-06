import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import PropTypes from "prop-types";
import Styles from "./Styles";

class TaskItem extends Component {
    render() {
        const {classes, task, status, onClickEdit, onClickDelete} = this.props;
        const {id, title, description} = task;

        return (
            <Card key={id} className={classes.task}>
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
                    <p>{description}</p>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Fab className={classes.fab} color="primary" aria-label="EDIT" size="small" onClick={onClickEdit}>
                        <Icon fontSize="small">
                            edit_icon
                        </Icon>
                    </Fab>
                    <Fab className={classes.fab} color="secondary" aria-label="DELETE" size="small" onClick={onClickDelete}>
                        <Icon fontSize="small">
                            delete_icon
                        </Icon>
                    </Fab>
                </CardActions>
            </Card>
        );
    }
}

TaskItem.propTypes = {
    classes: PropTypes.object,
    task: PropTypes.object,
    status: PropTypes.object,
    onClickEdit: PropTypes.func,
    onClickDelete: PropTypes.func
};

export default withStyles(Styles)(TaskItem);