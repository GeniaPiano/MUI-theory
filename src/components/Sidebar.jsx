import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import {Home, ModeNight} from "@mui/icons-material";
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';



export const Sidebar = () => {


    return  (
            <Box
                  p={2}
                  sx={{display: {xs: "none", sm: "block"}}}>
               <Box position="fixed">
                   <List >
                       <ListItem disablePadding>
                           <ListItemButton component="a" href="#home">
                               <ListItemIcon>
                                   <Home />
                               </ListItemIcon>
                               <ListItemText primary="Homepage"/>
                           </ListItemButton>
                       </ListItem>

                       <ListItem disablePadding>
                           <ListItemButton component="a" href="#simple-list">
                               <ListItemIcon>
                                   <SettingsIcon/>
                               </ListItemIcon>
                               <ListItemText primary="Settings"/>
                           </ListItemButton>
                       </ListItem>

                       <ListItem disablePadding>
                           <ListItemButton component="a" href="#simple-list">
                               <ListItemIcon>
                                   <AccountBoxIcon/>
                               </ListItemIcon>
                               <ListItemText primary="Profile"/>
                           </ListItemButton>
                       </ListItem>

                       <ListItem disablePadding>
                           <ListItemButton component="a" href="#home">
                               <ListItemIcon>
                                   <Home/>
                               </ListItemIcon>
                               <ListItemText primary="Homepage"/>
                           </ListItemButton>
                       </ListItem>

                       <ListItem disablePadding>
                           <ListItemButton component="a" href="#home">
                               <ListItemIcon>
                                   <Home/>
                               </ListItemIcon>
                               <ListItemText primary="Homepage"/>
                           </ListItemButton>
                       </ListItem>

                       <ListItem disablePadding>
                           <ListItemButton component="a" href="#home">
                               <ListItemIcon>
                                   <Home/>
                               </ListItemIcon>
                               <ListItemText primary="Homepage"/>
                           </ListItemButton>
                       </ListItem>

                       <ListItem disablePadding>
                           <ListItemButton component="a" href="#home">
                               <ListItemIcon>
                                   <Home/>
                               </ListItemIcon>
                               <ListItemText primary="Homepage"/>
                           </ListItemButton>
                       </ListItem>

                       <ListItem disablePadding>
                           <ListItemButton component="a" href="#home">
                               <ListItemIcon>
                                   <ModeNight/>
                               </ListItemIcon>
                               <Switch/>
                           </ListItemButton>
                       </ListItem>
                   </List>
               </Box>
            </Box>
    )
}