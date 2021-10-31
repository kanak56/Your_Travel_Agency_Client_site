import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
const ContactUs = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        reset();
        console.log(data)
        alert('your description send to Your Travel Agent mail account')
    };
    return (

        <div id='contactUs' className='mt-5'>
            <div>
                <h1 className="text-white">Contact Us</h1>
                <form style={{ paddingTop: '20px' }} onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder='Your Name' /> <br /> <br />
                    <input {...register("img", { required: true, maxLength: 20 })} placeholder='Your Email' /> <br />
                    <br />
                    <textarea style={{ width: '350px', height: '300px' }}  {...register("description", { required: true })} placeholder='Description' />
                    <br />
                    <br />

                    <Button variant="primary" type="submit">Submit</Button>
                </form>
            </div>
        </div >
    );
};

export default ContactUs;