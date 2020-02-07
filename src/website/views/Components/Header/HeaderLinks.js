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

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "../../../asset/jss/views/headerLInksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <ListItem className={classes.listItem}>
                    <Button
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >Menu
                    </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Button
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >Contact us
                    </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="Components"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    dropdownList={[
                        <Link to="/" className={classes.dropdownLink}>
                            All components
                        </Link>,
                        <a
                            href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
                            target="_blank"
                            className={classes.dropdownLink}
                        >
                            Documentation
                        </a>
                    ]}
                /></ListItem>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    Order Online</Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    Events</Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    Location</Button>
            </ListItem>

        </List>
    );
}