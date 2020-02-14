import React from "react";
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ParallaxBackButtons from "../Components/Parallax/ParallaxBackButtons";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
const useStyles = makeStyles(theme => ({
    root: {

        justifyContent: 'space-around',
        overflow: 'hidden',
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex:1,

            color:"#fff",
            '& $imageBackdrop': {
                opacity: 0.25,
                backgroundColor:"#9f0018",
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                color: '#eff8ff',
            },
        },
    },
    gridList: {
        width: "100%",
        height: 450,
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));


export default function About() {
    const classes = useStyles();

    return (
        <div className={classes.section}>

                <Grid container xs={12} justify="center">
                    <Grid item xs={7}>
                    <div className={classes.root}>
                        <ParallaxBackButtons image={require('../../asset/img/marinavorontsova160800088.jpg')}>

                        <GridList cellHeight={200}  className={classes.gridList}>

                     <GridListTile >
                    <ButtonBase
                    focusRipple
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        minWidth: "300px",
                    }}
                >

                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
            <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
            >
             Menu

            </Typography>
          </span>
                </ButtonBase>
                       </GridListTile>
                         <GridListTile >
                             <ButtonBase
                                 focusRipple
                                 className={classes.image}
                                 focusVisibleClassName={classes.focusVisible}
                                 style={{
                                     minWidth: "300px",
                                 }}
                             >
<span
    className={classes.imageSrc}

/>
                                 <span className={classes.imageBackdrop} />
                                 <span className={classes.imageButton}>
            <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
            >
             Menu Special

            </Typography>
          </span>
                             </ButtonBase>
                         </GridListTile>
                         <GridListTile >
                             <ButtonBase
                                 focusRipple
                                 style={{
                                     minWidth: "300px",
                                 }}
                                 className={classes.image}
                                 focusVisibleClassName={classes.focusVisible}
                             >

                                 <span className={classes.imageBackdrop} />
                                 <span className={classes.imageButton}>
            <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
            >
             Menu Summer

            </Typography>
          </span>
                             </ButtonBase>
                         </GridListTile>

                   </GridList></ParallaxBackButtons>
                    </div>
                    </Grid>
                    <Grid item xs={5}>
<Typography variant={"h6"} style={{color:"#000"}}>The first Michelin Guide was compiled in 1900 by French industrialist Andre Michelin, along with his brother Edouard Michelin. They wanted to create demand for automobiles…and therefore, the tires they manufactured.

    At the time, there were plenty of bicycles, but there were only 300 cars in France. Not enough for a viable business selling automobile tires…the brothers had a profit motive.</Typography>

                    </Grid>
                    </Grid>

                </div>


    );
}
