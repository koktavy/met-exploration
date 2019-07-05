import React from "react"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import InputBase from "@material-ui/core/InputBase"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import { navBarStyles } from "./navBarStyle.js"

const NavBarComponent = props => {
  const { classes } = props

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <a href="https://www.metmuseum.org/">
            <img className={classes.logo}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/The_Metropolitan_Museum_of_Art_Logo.svg/771px-The_Metropolitan_Museum_of_Art_Logo.svg.png"
              width="45"
              alt="'The Met' stylized logo"
            />
          </a>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Explore…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "Search" }}
            />
          </div>
          <div className={classes.grow} />
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export const NavBar = withStyles(navBarStyles)(NavBarComponent)
