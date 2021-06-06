import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    color: {
        primary: "#388E3C",
        secondary: "#8BC34A",
        error: "#D32F2F",
        textColor: "#FFFFFF",
        defaultTextColor: "#000000",
    },
    typography: {
        fontFamily: "Roboto",
    },
    shape: {
        margin: 10,
        borderRadius: 4,
        background: "#1976D2",
        backgroundHover: "#63a4ff",
        textColor: "#FFFFFF",
        borderColor: "#CCCCCC",
        padding: "10px 20px",
    },

    spacing: factor => `${5 * factor}px`,
});

export default theme;