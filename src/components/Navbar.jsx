import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Mail, Notifications, Search } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logoSm: {
        display: "black",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(1),
    },
}));

const Navbar = () => {
    const classes = useStyles();
    return (
    <AppBar>
        <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logoLg}>
                Necmos Dev
            </Typography>
            <Typography variant="h6" className={classes.logoSm}>
                Necmos
            </Typography>
            <div className={classes.search}>
                <Search/>
                <InputBase placeholder="Search..." className={classes.input}/>
            </div>
            <div className={classes.icons}>
                <Badge badgeContent={4} color="secondary">
                   <Mail/>
                </Badge>
                <Badge badgeContent={2} color="secondary">
                   <Notifications/>
                </Badge>
                <Avatar alt="Remy Sharp" src="/src/img/among-us.JPG" />
            </div>
        </Toolbar>
    </AppBar>
    );
};

export default Navbar;