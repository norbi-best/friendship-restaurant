import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../Components/Grid/GridContainer.js";
import GridItem from "../Components/Grid/GridItem.js";
import CustomInput from "../Components/CustomInput/CustomInput.js";
import Button from "../Components/CustomButtons/Button.js";

import styles from "../../asset/jss/views/workStyle.js";

const useStyles = makeStyles(styles);
export default function ContactForm(){
const classes = useStyles();
return (
    <div className={classes.section}>
        <GridContainer justify="center">
            <GridItem cs={12} sm={12} md={8}>
                <h2 className={classes.title}>Contact us</h2>
                <h4 className={classes.description}>
                    Divide details about you. Write a
                    few lines about each one and contact us about any . We will responde get back to you in a couple of
                    hours.
                </h4>
                <form>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <CustomInput
                                labelText="Your Name"
                                id="name"
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <CustomInput
                                labelText="Your Email"
                                id="email"
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                        <CustomInput
                            labelText="Your Message"
                            id="message"
                            formControlProps={{
                                fullWidth: true,
                                className: classes.textArea
                            }}
                            inputProps={{
                                multiline: true,
                                rows: 5
                            }}
                        />
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                                <Button >Send Message</Button>
                            </GridItem>
                        </GridContainer>
                    </GridContainer>
                </form>
            </GridItem>
        </GridContainer>
    </div>
);
}