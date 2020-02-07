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
import image3 from "../../asset/img/83069877_2830289860324609_1160202023929380864_n-2.jpg";
import image4 from "../../asset/img/83179042_2818324191521176_4915364829302095872_n.jpg";
import image5 from "../../asset/img/76638543_2686654221354841_8586960443111636992_o.jpg";
import image6 from "../../asset/img/77231400_2693326137354316_6855829662065491968_o.jpg";

import styles from "../../asset/jss/views/components.js";
const tileData = [
    {
        img: image3,

        cols: 2,
        featured: true,
    },
    {
        img: image4,

    },
    {
        img: image5,

    },
    {
        img: image6,

        featured: true,
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
}));

function Menu() {
    const classes = useStyles();
    return(
        <div className={classes.section}>



                <GridList cellHeight={300} className={classes.gridList} cols={5}>
                    {tileData.map(tile => (
                        <GridListTile key={tile.img} cols={tile.cols || 2}>
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList></div>



    )
}
export default Menu