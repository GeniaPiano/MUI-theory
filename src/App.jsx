import './App.css'
import {Button, Grid, Typography, styled} from "@mui/material";
import CabinIcon from '@mui/icons-material/Cabin';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';


export const App = () => {

  const BlueButton = styled(Button)({
      backgroundColor: 'skyblue',
      color: '#888',
      margin: 2,
      padding: 2,
      "&:hover": {
          backgroundColor: 'lightblue',
      },
      "disabled" : {
          backgroundColor: "grey"
      }
  })

  return (
    <>
      <Typography color="secondary"> All buttons </Typography>
        <Grid container gap={2} >
            <Button startIcon={<CabinIcon/>} Icon={<CabinIcon/>}>Text</Button>
            <Button startIcon={<BrokenImageIcon/>} variant="outlined" size="large">Text</Button>
            <BlueButton
                variant="contained"
            >Text</BlueButton>
        </Grid>
    </>
  )
}


