import React from "react";
import styles from "./LoginPage.module.css"
import { Button, Card, CardContent, CardHeader, IconButton, InputAdornment, OutlinedInput, TextField, FormControl, FormHelperText } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useToggle from "../../customHooks/useToggle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import validationSchema from "../../validationSchema/loginFormSchema";

interface FormFields {
    email: string;
    password: string;
}
const LoginForm: React.FC = () => {
    const [passwordVisible, togglePasswordVisibility] = useToggle(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
        mode: 'onBlur',
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = async (data: any) => {
        console.log('Submit Executed', data)
    }
    const onSubmitError = (data: any) => {
        console.log('Submit Error Executed', data)
    }
    return <Card >
        <CardHeader title='Login Form' />
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
        </CardContent>
    </Card>
}

export default LoginForm