import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5),
    },
    media: {
        height: "250px",
        [theme.breakpoints.down('sm')]: {
            height: 150,
        },
    },
}));

const Post = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://source.unsplash.com/random"
                    tittle= 'My Post'
                />
                <CardContent>
                    <Typography gutterButton variant='h5'>My First Post</Typography>
                    <Typography variant='body2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae quo error enim distinctio! Molestias, repudiandae?
                        Deleniti maiores odio, harum autem sint sequi, tenetur accusamus ut sed esse
                        ipsam reiciendis quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae quo error enim distinctio! Molestias, repudiandae? Deleniti maiores odio,
                        harum autem sint sequi, tenetur accusamus ut sed esse ipsam reiciendis quod.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size='small' color='primary'>Share</Button>
                <Button size='small' color='primary'>Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default Post;