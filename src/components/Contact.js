import React from 'react';
import img4 from '../assets/img4.jpg';
import { Formik, Form,Field, ErrorMessage } from 'formik';
import * as Yup from "yup"; // Import Yup for validation;'
import './Contact.css';


function Contact() {
    const validationSchema= Yup.object({
        name: Yup.string()
        .min(2, "name must be at least 2 characters")
        .max(50, " name can't exceed 50 characters")
        .required(" name is required"),
        email: Yup.string()
        .email('invalid email address')
        .required(" email is required"),
        contact: Yup.string()
        .min(10, "Contact Number must be 10 digit")
        .max(10, " Contact Number must be 10")
        .matches(/^[0-9]+$/, "Must be only digits")

      })
  return (
    <div >
    <div className='container-fluid d-flex justify-content-center align-items-center navsection'style={{
      width:'100%',backgroundImage:`url(${img4})`,backgroundPosition:'center'
      }}>
        <h1 className='text-white'>Contact Us</h1>
        </div>
        <div className='row mt-3 mb-3'>
            <div className='col-lg-6 d-flex justify-content-center'>
                <Formik  initialValues={{
                    name: '',
                    email : '',
                    contact : '',
                    message : '',
                }}
                validationSchema={validationSchema} // Apply Yup validation schema
                onSubmit={(values,{resetForm})=>{
                    console.table(values);
                    alert('We will contact you soon as possible')
                    resetForm(values);
               }}
                >
                    <Form className='w-75'>
                        <h3 className='text-primary'>Get In Touch</h3>
                        <label htmlFor='name' className='form-label'>Name:</label>
                        <Field type='text'className='form-control' name='name' placeholder='Enter Your Name'/>
                        <ErrorMessage name="name" component="div" className="text-danger" />
                        <label htmlFor='email'className='form-label'>Email:</label>
                        <Field type='email' className='form-control' name='email' placeholder='Enter Your Email' />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                        <label htmlFor='contact'className='form-label'>Contact No:</label>
                        <Field type='Number' className='form-control' name='contact' placeholder='Enter Your Contact Number' />
                        <ErrorMessage name="contact" component="div" className="text-danger" />
                        <label htmlFor='message'className='form-label'>Message:</label>
                        <Field as="textarea" className='form-control'name="message"/>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </Form>
                </Formik>
            </div>
            <div className='col-lg-6 mt-3 d-flex justify-content-center align-items-center'>
               <div >
               <h3 className='text-primary mb-3'>Contact Details</h3>
                <p > sector-141,ghaziabad uttar pradesh</p>
                <p ><strong className='text-primary'>Email:</strong> abc@gmail.com</p>
                <p ><strong className='text-primary'>Contact Number:</strong> 7709871478</p>

               </div>
            </div>

        </div>
    </div>
    
  )
}

export default Contact
