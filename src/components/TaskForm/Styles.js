const Styles = (theme) => ({
    header: {
        color: theme.color.textColor,
        backgroundColor: theme.color.primary,
    },

    title: {
        marginBottom: 0,
        padding: theme.spacing(3),
        color: theme.color.textColor,
    },

    paperForm: {
        top: "50%",
        left: "50%",
        minWidth: 500,
        position: "absolute",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#FFFFFF",
    },

    container: {
        padding: theme.spacing(3),
    },

    actionButton: {
        marginTop: theme.spacing(3),
    },

    buttonForm: {
        marginLeft: theme.spacing(3),
    },

    iconClone: {
        padding: theme.spacing(3),
    },

    btnClone: {
        padding: 4,
        minWidth: "auto",
        color: theme.color.textColor,
    }
});

export default Styles;