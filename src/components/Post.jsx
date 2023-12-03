import {Avatar, Card, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography} from "@mui/material";
import {Favorite, FavoriteBorder, MoreVert, Share} from "@mui/icons-material";

export const Post = () => {
        return (

        <Card sx={{margin: "25px 0"}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ backgroundColor: "red" }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                }

                title="John Doe"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt="Paella dish"
            />

            <IconButton>
                <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />} />
            </IconButton>
            <IconButton>
                <Share/>
            </IconButton>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
        </Card>
    )
}