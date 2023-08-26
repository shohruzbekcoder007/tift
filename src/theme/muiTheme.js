import { createTheme } from '@mui/material/styles'

const muiTheme = createTheme({
    palette: {
        primary: {
            main: "#039E51",
        },
        blackButton: {
            main: "#1A1818"
        },
        secondary: {
            main: "#F6F6F6"
        },
        redButton: {
            main: "#C30000"
        },
        BlueButton: {
            main:  "#00379E"
        },
        YellowButton: {
            main:  "yellow"
        },
    },
    text: {
        secondary: "#115E8C"
    },
});

export default muiTheme