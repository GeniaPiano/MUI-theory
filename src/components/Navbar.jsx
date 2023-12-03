import {
    AppBar,
    Autocomplete,
    Avatar,
    Badge, Box,
    Menu,
    MenuItem,
    styled, TextField,
    Toolbar,
    Typography
} from "@mui/material";
import PianoIcon from '@mui/icons-material/Piano';
import {Mail, Notifications} from "@mui/icons-material";
import {useState} from "react";
import {top100Films} from "../data/filmsData.js";


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
   })

const Search = styled('div')(({theme})=> ({
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    width: "45%"
}))

const UserBox = styled(Box)(({theme})=> ({
    display: "none",
    gap: "15px",
    alignItems: "center",
    [theme.breakpoints.down("sm")] : {
        display: "flex"
    }
}))

const Icons = styled(Box)(({theme})=> ({
    display: "none",
    gap: "15px",
    alignItems: "center",
    [theme.breakpoints.up("sm")] : {
        display: "flex"
    }
}))
export const Navbar = () => {

    const [open, setOpen] = useState(false)
    return  (
        <AppBar position="sticky" sx={{padding: "5px 0"}}>
            <StyledToolbar>
               <Typography variant="h6" sx={{
                   display: {xs: "none", sm:"block"}
               }}>
                   piano dev
               </Typography>
                <PianoIcon sx={{display: {xs: "block", sm: "block"}}}/>
                <Search >

                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: "100%"}}
                        renderInput={(params) =>
                            <TextField   {...params} label="Movie" />}
                    />
                </Search>
                <Icons>
                    <Badge badgeContent={2} color="error">
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={5} color="error">
                        <Notifications/>
                    </Badge>
                    <Avatar
                        sx={{width: 25, height: 25, cursor: "pointer"}}
                        onClick={()=> setOpen(true)}
                                />
                </Icons>
                <UserBox>
                    <Avatar
                        sx={{width: 25, height: 25, cursor: "pointer"}}
                        onClick={() => setOpen(true)}/>
                    <Typography variant="span">John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={()=> setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}
