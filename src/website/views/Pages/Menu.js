import React from "react";
// @material-ui/core components

import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import CustomInput from "../Components/CustomInput/CustomInput.js";

import Button from "../Components/CustomButtons/Button.js";
import GridContainer from "../Components/Grid/GridContainer";
import GridItem from "../Components/Grid/GridItem";

import Header from "../Components/Header/Header.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "../Components/CustomDropdown/CustomDropdown.js";

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import '../../asset/style.css';
import styles from "../../asset/jss/views/components.js";

const useStyles = makeStyles(theme => ({
    ...styles,

    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',

        height: "100vh",
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "100%",
        height: "100vh",
        alignItems: "center",
    },




                    }));

function Menu() {
    const classes = useStyles();
    return(
        <div className={classes.section}>
            <GridList cellHeight={380} className={classes.gridList} cols={3}>
                <GridListTile  cols={1 || 1}>
                    <div className="parent" onClick="">
                        <div className="child bg-one">

                        </div>
                    </div>
                </GridListTile>
                <GridListTile  cols={1 || 1}>
                    <div className="parent" onClick="">
                        <div className="child bg-two">

                        </div>
                    </div></GridListTile>
                <GridListTile  cols={1 || 1}>
                    <div className="parent" onClick="">
                        <div className="child bg-three">

                        </div>
                    </div></GridListTile>
                <GridListTile  cols={1 || 1}>
                    <div className="parent" onClick="">
                        <div className="child bg-four">

                        </div>
                    </div>

                </GridListTile>

            </GridList></div>

    )
}
export default Menu
