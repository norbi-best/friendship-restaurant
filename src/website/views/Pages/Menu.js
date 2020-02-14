import React from "react";


import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import styles from "../../asset/jss/views/components.js";

import '../../asset/style.css';
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
            <GridList cellHeight={300} className={classes.gridList} cols={3}>
                <GridListTile  cols={1 || 2}>
                    <div className="parent" onClick="">
                        <div className="child bg-one">

                        </div>
                    </div>
                </GridListTile>
                <GridListTile  cols={1 || 2}>
                    <div className="parent" onClick="">
                        <div className="child bg-two">

                        </div>
                    </div></GridListTile>
                <GridListTile  cols={1 || 2}>
                    <div className="parent" onClick="">
                        <div className="child bg-three">

                        </div>
                    </div></GridListTile>
                <GridListTile  cols={1 || 2}>
                    <div className="parent" onClick="">
                        <div className="child bg-four">

                        </div>
                    </div>

                </GridListTile>

            </GridList></div>

    )
}
export default Menu
