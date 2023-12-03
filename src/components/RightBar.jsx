import {Box} from "@mui/material";

export const RightBar = () => {
    return  (
        <>
            <Box bgcolor="pink"
                 flex={2} p={2}
                 sx={{display: {xs: "none", sm: "block"}}}
            >
                RightBar
            </Box>
        </>
    )
}