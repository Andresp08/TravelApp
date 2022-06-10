import { Close, Send } from '@mui/icons-material';
import { 
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle, 
    IconButton, 
    TextField 
} from '@mui/material'
import { useRef, useState } from 'react';
import { useValue } from '../../context/ContextProvider'
import PasswordField from './PasswordField';

const Login = () => {

    const { state: { openLogin }, dispatch } = useValue();
    const [title, setTitle] = useState('Login');
    const [isRegister, setIsRegister] = useState(false);

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const handleLogin = () => {
        dispatch({ type: 'CLOSE_LOGIN' })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Dialog
            open={openLogin}
            onClose={handleLogin}
        >
            <DialogTitle>
                {title}
                <IconButton
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        // color: (theme) => theme.palet.grey[500]
                    }}
                    onClick={handleLogin}
                >
                    <Close />
                </IconButton>
            </DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent dividers>
                    <DialogContentText>
                        Please fill your information in the fields below:
                    </DialogContentText>
                    {isRegister &&
                        <TextField
                            autoFocus
                            margin='normal'
                            variant='standard'
                            id='name'
                            label='Name'
                            type='text'
                            fullWidth
                            inputRef={nameRef}
                            inputProps={{ minLength: 2 }}
                            required
                        />
                    }
                    <TextField
                        autoFocus={!isRegister}
                        margin='normal'
                        variant='standard'
                        id='email'
                        label='Email'
                        type='email'
                        fullWidth
                        inputRef={emailRef}
                        inputProps={{ minLength: 2 }}
                        required
                    />
                    <PasswordField {...passwordRef}/>
                    {isRegister && 
                        <PasswordField
                            passwordRef={passwordRef} 
                            id = 'confirmPassword'
                            label = 'Confirm Password'
                        />
                    }
                </DialogContent>
                <DialogActions>
                    <Button 
                        type='submit' 
                        variant='contained' 
                        endIcon={<Send/> }
                    >
                        Submit 
                    </Button>
                </DialogActions>
            </form>
            <DialogActions sx={{justifyContent: 'left', p:'5px 24px'}}>
                {isRegister ? 'Do you have an account? Sign in now ' : "Don't you have an account ? Create one now" }
                <Button onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? 'Login' : 'Register'}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Login