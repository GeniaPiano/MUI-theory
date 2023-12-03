import './App.css'
import {Sidebar} from "./components/Sidebar.jsx";
import {Feed} from "./components/Feed.jsx"
import {RightBar} from "./components/RightBar.jsx";
import {Box, Stack} from "@mui/material";
import {Navbar} from "./components/Navbar.jsx";

export const App = () => {

  return (

     <Box>
         <Navbar/>
         <Stack direction="row"
                spacing={1}
                justifyContent="space-between">
             <Sidebar flex={1}/>
             <Feed/>
             <RightBar/>
         </Stack>
     </Box>

  )
}


