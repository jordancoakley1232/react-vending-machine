import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from "react-router-dom";
import "./Navbar.scss";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Navbar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Grab Something Nice
          </Typography>
                    <Link to={props.refillPath ? props.refillPath : props.vendingMachinePath}>
                        <Button color="inherit">{props.refill ? props.refill : props.vendingMachine}<ArrowForwardIosIcon /> </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
