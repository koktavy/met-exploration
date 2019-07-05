import { createStyles } from "@material-ui/core";

export const loadMoreButtonStyle = () =>
    createStyles({
        flexContainer: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center", // Horizonal alignment (center or space-around)
        },
        button: {
            margin: "1.5em",
            size: "medium",
            color: "#ff0000",
            alignSelf: "flex-end"
        }
    })