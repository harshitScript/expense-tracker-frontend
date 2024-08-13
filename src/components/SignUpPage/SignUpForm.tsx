import { Button, Card, CardContent, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./SignUpForm.module.css"
import useToggle from "../../customHooks/useToggle";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validationSchema/signUpFormSchema";
import { useNavigate } from "react-router-dom";
import { User } from "../../models/user.model";
import { signUpUserThunk } from "../../store/thunk/users.thunk";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { LoadingButton } from "@mui/lab";



const SignUpForm: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { usersLoading } = useAppSelector(state => state.users);
    const [passwordVisible, togglePasswordVisibility] = useToggle(false);
    const [confirmPasswordVisible, toggleConfirmPasswordVisibility] = useToggle(false);
    const [passwordNotMatchedError, setPasswordNotMatchedError] = useState<boolean>(false);
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<User>({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })
    const signUpSuccess = () => {
        navigate('/login?referer=sign-up', { replace: true })
    }
    const onSubmit = (data: any) => {
        dispatch(signUpUserThunk(data, signUpSuccess, () => { }))

    }
    const onSubmitError = (data: any) => {
        console.log('On Submit Error => ', data)
    }
    const checkPasswordMatched = () => {
        const password = watch('password');
        const confirmPassword = watch('confirmPassword');
        if (password !== confirmPassword) setPasswordNotMatchedError(true);
        else setPasswordNotMatchedError(false)
    }
    const onLoginClick = () => {
        navigate('/login');
    }
    return <Card>
        <CardContent style={{ padding: '1rem' }}>
            <form className={styles.sign_up_form} onSubmit={handleSubmit(onSubmit, onSubmitError)}>
                <div className={styles.name_input_outer}>
                    <TextField autoFocus label='First Name' style={{ flex: 1 }} placeholder="enter first name" error={!!errors.firstName} helperText={errors.firstName?.message} {...register("firstName")} />
                    <TextField label='Last name' style={{ flex: 1 }} placeholder="enter last name" error={!!errors.lastName} helperText={errors.lastName?.message} {...register("lastName")} />
                </div>
                <TextField label="Phone" placeholder="enter phone number" helperText={errors.phone?.message} {...register("phone")} error={!!errors.phone} InputProps={{
                    startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                }} />
                <TextField label="Email" placeholder="enter email" error={!!errors.email} helperText={errors.email?.message} {...register("email")} />
                <TextField label='Password' type={passwordVisible ? "text" : "password"} placeholder="enter password" error={!!errors.password} helperText={errors.password?.message} {...register("password")} InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={togglePasswordVisibility}
                            edge="end"
                        >
                            {passwordVisible ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }} />
                <TextField label='Confirm Password' type={confirmPasswordVisible ? "text" : "password"} placeholder="enter confirm password" error={!!(errors.confirmPassword || passwordNotMatchedError)} helperText={passwordNotMatchedError ? 'Confirm Password not matched.' : errors.confirmPassword?.message} {...register("confirmPassword")} onBlur={checkPasswordMatched} InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={toggleConfirmPasswordVisibility}
                            edge="end"
                        >
                            {confirmPasswordVisible ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }} />
                <LoadingButton loading={usersLoading} loadingPosition="start" type="submit" disabled={!isValid} fullWidth variant="contained" className="secondary-button" >Register</LoadingButton>
            </form>
            <p style={{ textAlign: 'center' }}>OR</p>
            <Button variant="contained" className="primary-button" fullWidth onClick={onLoginClick}>Login</Button>
        </CardContent>
    </Card>
}
export default SignUpForm;