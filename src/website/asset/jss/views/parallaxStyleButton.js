const parallaxStyle = {
    parallax: {
        height: "100vh",
        maxHeight: "1000px",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center center",

        margin: "0",
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
            width: "100%",
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