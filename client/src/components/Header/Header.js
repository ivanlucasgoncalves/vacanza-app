import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AirplanemodeActive from '@material-ui/icons/AirplanemodeActive';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        width: '50px',
        height: '50px'
    },
    icon: {
        width: '1.5em',
        height: '1.5em'
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <>
            <Avatar className={classes.avatar}>
                <AirplanemodeActive className={classes.icon}/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
        </>
    );
}