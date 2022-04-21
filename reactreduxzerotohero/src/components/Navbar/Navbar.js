import React, {useState} from 'react'
import { AppBar, Button, Toolbar, Typography, Badge, Menu, MenuItem } from '@mui/material'
import { Box } from '@mui/system'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const openMenu = Boolean(anchorEl);

    const handleClick = e => {
        setAnchorEl(e.currentTarget);
        console.log(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <>
    <AppBar sx={{
        backgroundColor: "white",
    }}>
        <Toolbar
        sx={{
            margin: "0 200px 0 200px",
        }}>
        
            <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: 'center',
            }}
            component="div">
                <Box>
                    <img src={process.env.PUBLIC_URL + "/thasmartlabslogowithoutbg.png"}
                    width="100"
                    alt="logo" />
                </Box>
                <Box
                sx={{
                    display: "flex",

                }}>
                    <Typography 
                    sx={{
                        marginRight:"50px", 
                        cursor: "Pointer",
                         color: "#616161" 
                        }}
                         aria-controls="projects-menu"
                         aria-haspopup="true"
                         aria-expanded={openMenu ? "true" : undefined}
                         onClick={handleClick}
                         > Our Products</Typography>
                         {/* Projects dropdown menu */}
                         <Menu
                         id="projects-menu"
                         anchorEl={anchorEl} 
                         open={openMenu}
                         onClose={handleClose}
                         >
                             <MenuItem onClick={handleClose}>thasmartLearn</MenuItem>
                             <MenuItem onClick={handleClose}>thasmartBiz</MenuItem>
                             <MenuItem onClick={handleClose}>thasmartChat</MenuItem>
                             <MenuItem onClick={handleClose}>thasmartTravel</MenuItem>
                         </Menu>
                    <Typography sx={{marginRight:"50px", cursor: "Pointer",color: "#616161"  }}>Services</Typography>
                    <Typography sx={{marginRight:"50px", cursor: "Pointer",color: "#616161"  }}>Scope</Typography>
                    <Typography sx={{marginRight:"50px", cursor: "Pointer",color: "#616161"  }}>Contact Us</Typography>
                    <Typography sx={{marginRight:"50px", cursor: "Pointer",color: "#616161"  }}>FAQS</Typography>
                    <Typography sx={{marginRight:"50px", cursor: "Pointer", color: "#616161" }}>Articles</Typography>
                </Box>
                <Box
                sx={{
                    display:"flex",
                    alignItems: 'center',
                    justifyContent: "Center",
                }}>
                <Typography sx={{ marginRight:"20px", cursor: "Pointer", color: "#616161" }}>Login</Typography>
                <Button sx={{marginRight:"20px",}} variant="contained">Lets Partner</Button>
                <Badge badgeContent={4} color="primary">
                    <AddShoppingCartIcon sx={{color:"black"}}/>
                </Badge>
                </Box>
            </Box>
        </Toolbar> 
    </AppBar>
    </>
  )
}

export default Navbar