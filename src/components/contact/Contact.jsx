import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import {RiWhatsappFill} from "react-icons/ri";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fsadth4', 'template_2hkfxue', form.current, 'B9_7oHm9l9WZcZ25C')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact'>
      <h5>Get in contact</h5>
      <h2>Contact Information</h2>


      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail/>
            <h4>Email</h4>
            <h5>protivaahammed7137@gmail.com</h5>
            <a href="mailto:protivaahammed7137@gmail.com" target="_blank">Send a mail</a>
          </article>



          <article className="contact__option">
          <RiWhatsappFill/>
          <h4>WhatsApp</h4>
          <h5>+8180-4666-6977</h5>
          <a href="https://api.whatsapp.com/send?phone=+818046666977" target="_blank">Send an uegent text</a>
          </article>

        </div>

{/* to send direct msg in a form*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="5" placeholder='Your Message' required></textarea> 
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
