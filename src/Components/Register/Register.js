import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true })} placeholder="First name" />

                <input {...register("lastName", { minLength: 2 })} placeholder="Last name" />
                <input {...register("email")} placeholder="Email" />


                <input type="submit" />
            </form>
            <h4>Already a Member?</h4>
            <NavLink to='/login'> Please Login</NavLink>
        </div>
    );
};

export default Register;