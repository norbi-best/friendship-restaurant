import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import image from "../../../asset/img/75398288_2651122521574678_1167449025327136768_o.jpg"
// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";
import ButtonBase from '@material-ui/core/ButtonBase';
import styles from "../../../asset/jss/views/headerLInksStyle.js";

const useStyles = makeStyles(styles);
const images = [
    {
        url: '../../asset/img/75398288_2651122521574678_1167449025327136768_o.jpg',
        title: 'Breakfast',
        width: '40%',
    }]
export default function Brand(props) {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>

                    <img src={image}/>

                </ListItem>
        </List>
    );
}