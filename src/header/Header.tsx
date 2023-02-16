import { ThemeProvider } from "@emotion/react";
import { faEllipsisV, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Palette } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";
import React from "react";
/* import { useNavigate } from "react-router-dom"; */
import "./Header.sass";

function Header() {
    const theme = createTheme ({
        palette: {
            mode:'light',
            primary: {
                main: '#fff'
            },
            secondary: {
                main: '#898989'
            }
        }
    })
    /* const navigate = useNavigate() */

return(
    <ThemeProvider theme={theme}>
        <AppBar position='static' className="classes.AppBar" color="primary">
            <Toolbar>
                <IconButton>
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                </IconButton>
                <Toolbar className="classes.logo">
                    <Typography>
                        Pokemon
                    </Typography>
                </Toolbar>
            </Toolbar>
        </AppBar>
    </ThemeProvider>
)
}
export default Header

function makeStyles(arg0: (theme: any) => { AppBar: { top: string; bottom: number; textAlign: string; }; logo: { display: string; justifyContent: string; }; }) {
    throw new Error("Function not implemented.");
}
