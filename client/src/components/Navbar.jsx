import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import {Lock, Menu} from '@mui/icons-material'
import { useValue } from '../context/ContextProvider'
import photoUrl from '../assets/profilePhoto.jpg'
import UserIcons from './user/UserIcons'

const user = {name: 'test', photoUrl}

const Navbar = () => {

    //destructuring state
    const {
        state:{currentUser},
        dispatch
    } = useValue();

    return (
        <AppBar>
            <Container maxWidth='lg'>
                <Toolbar disableGutters>
                    <Box marginRight={1}>
                        <IconButton size='Large' color='inherit'>
                            <Menu />
                        </IconButton>
                    </Box>
                    <Typography
                        variant='h6'
                        component='h1'
                        noWrap
                        sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}
                    >
                        You're Welcome 
                    </Typography>

                    <Typography
                        variant='h6'
                        component='h1'
                        noWrap
                        sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                    >
                        YRW 
                    </Typography>
                    {!currentUser ? (
                        <Button
                            color='inherit'
                            startIcon={<Lock/>}
                            onClick={()=> dispatch({type:'OPEN_LOGIN'})}
                        >
                        Login
                        </Button>
                    ) : <UserIcons/>}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar