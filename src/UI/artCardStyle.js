import { createStyles } from "@material-ui/core";

export const artCardStyle = () =>
    createStyles({
        card: {
            // flex: "1 0 20em",
            float: "left",
            margin: "0.4em",
            perspective: 1000
        },
        actionArea: {
            maxWidth: "30em", // Set only maximums for clean images but high size variation between image/text views
            //width: "30em", // Jumpy without this
            //height: "30em", // Zero-jump, but looks rigid...
            backgroundColor: "#fdfdfd",
            display: "inline" // Eliminates 3px of bottom padding inherit to CardActionAreas
        },
        flipped: {
            transform: "rotateY(180deg)"
        },
        img: {
            src: "https://static.thenounproject.com/png/340719-200.png",
            maxWidth: "28em",
            maxHeight: "28em",
            paddingBottom: "0",
            padding: "0.5em"
        }
    })