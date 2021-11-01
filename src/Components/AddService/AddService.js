import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button'
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Service Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <h3>Add a service</h3>
            <form style={{ paddingTop: '20px' }} onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Service Name' /> <br />
                <input {...register("img", { required: true })} placeholder='img url' /> <br />
                <input {...register("shortDescription", { required: true, maxLength: 20 })} placeholder='How Many days Tour' />
                <br />
                <input {...register("price", { required: true, maxLength: 20 })} placeholder='price' />
                <br />
                <br />
                <textarea rows="10" cols="30"  {...register("description")} placeholder='Service Description' /> <br />

                <Button variant="primary" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default AddService;