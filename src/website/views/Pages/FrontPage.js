import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Menu from "./Menu";
import Header from "../Components/Header/Header";
import HeaderLinks from "../Components/Header/HeaderLinks.js";
import styles from "../../asset/jss/views/components.js";
import Parallax from "../Components/Parallax/Parallax.js";
import GridContainer from "../Components/Grid/GridContainer.js";
import GridItem from "../Components/Grid/GridItem.js";
import Footer from "../Components/Footer/Footer.js";
import Divider from "@material-ui/core/Divider";
import Brand from "../Components/Header/Brand";
import About from "./About";
import StartPage from "./StartPage";
import ContactForm from "./ContactForm";
import image from '../../asset/img/75398288_2651122521574678_1167449025327136768_o.jpg'
const useStyles = makeStyles(styles);



function FrontPage(props) {
        const classes = useStyles();
        const { ...rest } = props;
        return (
            <div style={{width:"100%"}}>
                <Header
                brand={<Brand/>}
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
                <Parallax image={require('../../asset/img/1291593_633276010026016_525588904_o.jpg')}>

                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem>
                                <div className={classes.brand}>

                                    <h3 className={classes.title}>
                                        Special offer
                                    </h3>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
<StartPage/>

                    <Divider />
                    <About/>
                    <Divider />

                    <Menu/>
                    <Divider />
                   <ContactForm/>
                </div>




            <Footer />

            </div>
        )

}
export default FrontPage;
