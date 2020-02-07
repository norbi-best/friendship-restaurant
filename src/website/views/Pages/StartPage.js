import React from "react";
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ParallaxBackButtons from "../Components/Parallax/ParallaxBackButtons";
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GridContainer from "../Components/Grid/GridContainer";
import GridItem from "../Components/Grid/GridItem";
import ReactPDF from '@react-pdf/renderer';

import {withStyles} from "@material-ui/core";
import CustomTabs from "../Components/Tabs/CustomTabs";
import {Build, Chat, Dashboard, Face, Palette, Schedule} from "@material-ui/icons";
import NavPills from "../Components/NavPills/NavPills";
import styles from "../../asset/jss/views/components";
const images = [
    {

        title: 'Menu',
        width: '200px',
    },
    {

        title: 'Menu',
        width: '200px',
    },
    {

        title: 'Menu',
        width: '200px',
    },


];
const useStyles = makeStyles(theme => ({
    ...styles,
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',

        height: "85vh",
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "",
        height: "80vh",
        alignItems: "center",
    },
    titlelet:{
        color:"#000000"
    },
    descriptionlet:{
        color:"#000000"
    }
}));


export default function StartPage() {
    const classes = useStyles();

    return (
        <div className={classes.section}>
            <div className={classes.root}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={8}>
                            <h2 className={classes.titlelet}>About us</h2>
                            <h5 className={classes.descriptionlet}>
                                This is the paragraph where you can write more details about your
                                product. Keep you user engaged by providing meaningful information.
                                Remember that by this time, the user is curious, otherwise he wouldn
                                {"'"}t scroll to get here. Add a button if you want the user to see
                                more.
                            </h5>
                        </GridItem>
                    </GridContainer>

            </div>
        </div>
    );
}