import { Fab, Container, IconButton, makeStyles, Modal, Tooltip, TextField, MenuItem, RadioGroup, FormControlLabel, Radio, FormLabel, Button } from '@material-ui/core';
import { Add as AddIcon, AutorenewTwoTone } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: 20,
        right: 20,
        backgroundColor: 'primary'
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            height: '100vh',
        },
    },
    form: {
        padding: theme.spacing(2),
    },
    item: {
        marginBottom: theme.spacing(3),
    }
}));

const Add = () => {
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    return (
        <>
            <Tooltip title='Add' area-label='add' onClick={() => setOpen(true)}>
                <Fab size='large' color='secondary' className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form className={classes.form} autoComplete='off'>
                        <div className={classes.item}>
                            <TextField
                                id="standard-basic"
                                label="Title"
                                variant="standard"s
                                ize='small'
                                style={{width: '100%'}}
                            />
                        </div>
                        <div className={classes.item}>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                defaultValue='Tell your story...'
                                variant='outlined'
                                label='Description'
                                size='small'
                                style={{width: '100%'}}
                            />
                        </div>
                        <div className={classes.item}>
                            <TextField select label='Visibility' value='Public'>
                                <MenuItem value='Public'>Public</MenuItem>
                                <MenuItem value='Private'>Private</MenuItem>
                                <MenuItem value='Unlisted'>Unlisted</MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                        <FormLabel component='legend'>Who can comment?</FormLabel>
                            <RadioGroup>
                                <FormControlLabel
                                    value="Everybody"
                                    control={<Radio size='small'/>}
                                    label="Everybody"
                                />
                                <FormControlLabel
                                    value="My Friends"
                                    control={<Radio size='small'/>}
                                    label="My Friends"
                                />
                                <FormControlLabel
                                    value="Nobody"
                                    control={<Radio size='small'/>}
                                    label="Nobody"
                                />
                                <FormControlLabel
                                    value="Custom"
                                    disabled
                                    control={<Radio size='small'/>}
                                    label="Custom (Premium)"
                                />
                            </RadioGroup>
                        </div>
                        <div className={classes.item}>
                            <Button
                                variant='outlined'
                                color='primary'
                                style={{marginRight:20}}
                            >
                                Create
                            </Button>
                            <Button
                                variant='outlined'
                                color='secondary'
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Container>
            </Modal>
        </>
    );
};

export default Add;