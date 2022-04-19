import { AppBar, Button, Toolbar, Typography, Badge, } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Navbar = () => {
  return (
    <>
    <AppBar sx={{
        backgroundColor: "pink",
    }}>
        <Toolbar>
            <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: 'center',
            }}
            component="div">
                <Box>
                    <img src={process.env.PUBLIC_URL + "/thasmartlab.png"}
                    width="100"
                    alt="logo" />
                </Box>
                <Box
                sx={{
                    display: "flex",

                }}>
                    <Typography sx={{marginRight:"50px", cursor: "Pointer", color: "#616161" }}>Projects</Typography>
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