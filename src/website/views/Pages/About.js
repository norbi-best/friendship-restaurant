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
import styles from "../../asset/jss/views/tabsStyle.js";
import {withStyles} from "@material-ui/core";
import CustomTabs from "../Components/Tabs/CustomTabs";
import {Build, Chat, Dashboard, Face, Palette, Schedule} from "@material-ui/icons";
import NavPills from "../Components/NavPills/NavPills";
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



export default function About() {
    const classes = withStyles(styles);

    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <div id="nav-tabs">
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                            <NavPills
                                alignCenter
color={"primary"}
                                tabs={[
                                    {
                                        tabButton: "Menu",
                                        tabIcon: Dashboard,
                                        tabContent: (
                                            <GridContainer justify="center">
                                                <GridItem xs={12} sm={12} md={4}>
                                                    <Paper style={{height:"65vh", width:"100%"}}>
                                                    <ButtonBase>Menu</ButtonBase>
                                                    </Paper>
                                                </GridItem>
                                            </GridContainer>
                                        )
                                    },
                                    {
                                        tabButton: "Menu Special",
                                        tabIcon: Palette,
                                        tabContent: (
                                            <GridContainer justify="center">
                                                <GridItem xs={12} sm={12} md={4}>
                                                    <Paper style={{height:"65vh",width:"100%"}}>
                                                    <ButtonBase>Menu Special</ButtonBase>
                                                    </Paper>
                                                </GridItem>

                                            </GridContainer>
                                        )
                                    }


                                ]}
                            />
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}