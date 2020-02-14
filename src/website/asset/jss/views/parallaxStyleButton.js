const parallaxStyle = {
    parallax: {
        height: "85vh",
        maxHeight: "1000px",
width:"80%",
        justifyItems:"center",
        minWidth:"200px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center center",

        margin: "auto",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center"
    },
    filter: {
        "&:before": {
            background: "#FFFFF",

        },
        "&:after,&:before": {
            position: "absolute",
            zIndex: "1",
width:"80%",
            height: "100%",
            left: "0",
            top: "0",
            content: "''"
        }
    },
    small: {
        height: "100vh"
    }
};

export default parallaxStyle;
