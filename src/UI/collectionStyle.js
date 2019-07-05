import { createStyles } from "@material-ui/core";

export const collectionStyle = () =>
    createStyles({
        flexContainer: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center", // Horizonal alignment (center or space-around)
            alignItems: "center", // Vertical alignment (center or flex-start)
        }
    })