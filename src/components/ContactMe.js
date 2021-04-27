import React, { useState } from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";

const ContactMe = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_gGm6CKspgqLO36qpMXhsq";


    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
              name: data.name,  
              phone: data.phone,  
              email: data.email,  
              subject: data.subject,  
              description: data.description 
            },
            userID
        )
        r.target.reset();
    }    

    const sendEmail = (serviceID, templateID,variables, userID) => {
    
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
          }).catch(err => console.error('bad'));
    };     
    return (
        <div id="contact" className="contacts">
            <div className="text-center">
                <h1>Let's talk!</h1>
                <p>Please fill the form and we’ll be in touch
                </p>
                <span className="success-message">
                    {successMessage}
                </span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            required
                            {...register("name", {
                                required:{
                                    value: true,
                                    message:'name required'
                                }
                              })}
                            />
                            <div className="line"></div>
                        </div>
                        <spam className="error-message">
                        </spam>
                        <div className="text-center">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                            required
                            {...register("phone", {
                                required:{
                                    value: true,
                                    message:'phone required'
                                }
                              })}
                            />
                            <div className="line"></div>
                        </div>
                        
                        <div className="text-center">
                            <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            required
                            {...register("email", {
                                required:{
                                    value: true,
                                    message:'email required'
                                }
                              })}
                            />
                            <div className="line"></div>
                        </div>
                        
                        <div className="text-center">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                            required
                            {...register("subject", {
                                required:{
                                    value: true,
                                    message:'subject required'
                                }
                              })}
                            />
                            <div className="line"></div>
                        </div>
                        
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <textarea
                            type="text"
                            className="form-control"
                            placeholder="Add comment"
                            name="description"
                            {...register("description", {
                                required:{
                                    value: true,
                                    message:'description required'
                                }
                              })}
                            >
                            </textarea>
                            <div className="line"></div>
                        </div>
                        <button className="btn-main-offer contact-btn" type="submit">
                            contact me
                        </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default ContactMe;
