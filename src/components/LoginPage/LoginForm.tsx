import React from "react";
import styles from "./LoginForm.module.css"
import { Button, Card, CardContent, IconButton, InputAdornment, OutlinedInput, TextField, FormControl, FormHelperText } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import validationSchema from "../../validationSchema/loginFormSchema";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hook";
import { loginThunk } from "../../store/thunk/auth.thunk";
import { LoginResponse } from "../../models/auth.model";
import { setLoginData } from "../../store/slice/auth.slice";
import toast from "react-hot-toast";
import useToggle from "../../hooks/useToggle";

interface FormFields {
    email: string;
    password: string;
}
const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [passwordVisible, togglePasswordVisibility] = useToggle(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
        mode: 'onBlur',
        resolver: yupResolver(validationSchema)
    });
    const loginSuccess = (data: LoginResponse) => {
        dispatch(setLoginData({ userId: data.userId, authToken: data.authToken }));
        localStorage.userId = data.userId;
        localStorage.authToken = data.authToken;
        window.location.pathname = '/dashboard';
        toast.success('User Login Successful.')
    }
    const onSubmit = async (data: any) => {
        dispatch(loginThunk(data, loginSuccess, () => { }));
    }
    const onSubmitError = () => {
        toast.error('Login Failed! Please Retry.')
    }
    const onRegisterClick = () => {
        navigate('/sign-up');
    }
    return <Card >
        <CardContent style={{ padding: '1rem' }}>
            <form className={styles.login_form} onSubmit={handleSubmit(onSubmit, onSubmitError)}>
                <TextField required autoFocus type="email" placeholder="enter email" error={!!errors.email} helperText={errors.email?.message} {...register('email')} />
                <FormControl>
                    <OutlinedInput {...register('password')} error={!!errors.password} autoComplete="current-password" required type={passwordVisible ? 'text' : 'password'} placeholder="enter password" endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={togglePasswordVisibility}
                                edge="end"
                            >
                                {passwordVisible ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    } />
                    {errors.password?.message ? <FormHelperText error={!!errors.password}>{errors.password?.message}</FormHelperText> : <></>}
                </FormControl>
                <Button type="submit" variant="contained" className="primary-button">Login</Button>
            </form>
            <p style={{ textAlign: 'center' }}>OR</p>
            <Button variant="contained" className="secondary-button" fullWidth onClick={onRegisterClick}>Register</Button>
        </CardContent>
    </Card>
}

export default LoginForm