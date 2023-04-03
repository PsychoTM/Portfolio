import React from 'react'
import './contact.css'
import {BiEnvelope} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eotvqxr', 'template_4v27xyj', form.current, '0SF0l6SLxeheZU11q')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        <div className="contact__options">

          <article className='contact__option'>
            <BiEnvelope className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>darius.blaga504@gmail.com</h5>
            <a href='mailto:darius.blaga504@gmail.com'>Send an email</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h5>Whatsapp</h5>
            <small>0040752499452</small><br></br>
            <a href='https://api.whatsapp.com/send?phone=0040752499452' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaLinkedin className='contact__option-icon'/>
            <h5>Linkedin</h5>
            <a href='https://www.linkedin.com/in/darius-blaga-31088916a/'>darius-blaga</a>
          </article>

        </div>

         <form ref={form} onSubmit={sendEmail}> 
         <input type='text' name='name' placeholder='Your Full Name' required />
         <input type='email' name='email' placeholder='Your email' required />
         <textarea name='message' rows='7' placeholder='Your Message' required />
         <button type='submit' className='btn btn-primary'>Send Message</button>
         </form>
      </div>
    </section>
  )
}

export default Contact