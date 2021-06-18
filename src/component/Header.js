import React from "react";
import logo from './logo.png';
import { AppBar, Toolbar } from "@material-ui/core";
import {Link} from "react-router-dom"
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor:theme.palette.common.white,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);
  

  
export default function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return(
        
        <AppBar>
            <Toolbar>
                <header style={{ paddingLeft: 20 }}>
                    <IconButton edge="start"  color="inherit" aria-label="menu" onClick={handleClick}>
                        <p >Menu</p> <MenuIcon style={{ paddingLeft: 20 }}/> 
                    </IconButton>
                    <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <StyledMenuItem >
                                 Accueil
                            </StyledMenuItem>
                        </Link>
                        <Link to="/component/voice" style={{ textDecoration: 'none' }}>
                            <StyledMenuItem>
                                Création de voix
                            </StyledMenuItem>
                        </Link>
                    </StyledMenu >
                     <img src={logo} alt="Logo" />
                 </header>
            </Toolbar>
        </AppBar>
    );
    
  }