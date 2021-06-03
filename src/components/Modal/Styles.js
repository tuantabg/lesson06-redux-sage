const Styles = (theme) => ({
    modal: {
        top: "50%",
        left: "50%",
        minWidth: 500,
        position: "absolute",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#FFFFFF",
    },

    header: {
        color: theme.color.textColor,
        backgroundColor: theme.color.primary,
    },

    title: {
        display: "flex",
        marginBottom: 0,
        alignItems: "center",
        padding: theme.spacing(3),
        color: theme.color.textColor,
        justifyContent: "space-between",
    },

    container: {
        padding: theme.spacing(3),
    },

    cloneIcon: {
        cursor: "pointer",
    },
});

export default Styles;