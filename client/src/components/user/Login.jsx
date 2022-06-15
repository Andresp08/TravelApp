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
import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { useValue } from '../../context/ContextProvider'
import GoogleOneTapLogin from './GoogleOneTapLogin';
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

       const email = emailRef.current.value
       const password = passwordRef.current.value

       //send login request if it's not register and return
       const name = nameRef.current.value
       const confirmPassword = confirmPasswordRef.current.value

       if(password !== confirmPassword) 
        return dispatch({
            type: 'UPDATE_ALERT', 
            payload: {
                open:true, 
                severity: 'error', 
                message: 'Passwords do not match'
            }
        });
        //send register request
    }

    //handle form title
    useEffect(() => {
        isRegister ? setTitle('Register') : setTitle('Login')
    }, [isRegister])

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
                    <PasswordField {...{passwordRef}}/>
                    {isRegister && 
                        <PasswordField
                            passwordRef={confirmPasswordRef} 
                            id = 'confirmPassword'
                            label = 'Confirm Password'
                        />
                    }
                </DialogContent>
                <DialogActions sx={{px:'19px'}}>
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

            <DialogActions sx={{justifyContent:'center', py:'24px'}}>
                <GoogleOneTapLogin />
            </DialogActions>
        </Dialog>
    )
}

export default Login