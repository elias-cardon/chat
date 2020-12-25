import React from "react";
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {classes} from "istanbul-lib-coverage";


let styles;
// eslint-disable-next-line no-unused-vars
styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        margin: '50px',
        padding: theme.spacing(3, 2),
    },
});

export default function Dashboard() {
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    This is a sheet of paper.
                </Typography>
                <Typography component="p">
                    Paper can be used to build surface or other elements for your application.
                </Typography>
            </Paper>
        </div>
    )
}