const Styles = theme => ({
    drawerPaper: {
        width: 240,
        maxWidth: 240,
        zIndex: 10,
        display: "block",
        position: "relative",
    },
    menuList: {
        textDecoration: "none",
        color: theme.color.defaultTextColor,
        textTransform: "uppercase",

        "&>div": {
            margin: "1px 0",
        },

        "&>div:hover": {
            color: theme.color.textColor,
            backgroundColor: theme.shape.backgroundHover,
        }
    },
    menuListActive: {
        "&>div": {
            color: theme.color.textColor,
            backgroundColor: theme.shape.background,
        },
    }
});

export default Styles;