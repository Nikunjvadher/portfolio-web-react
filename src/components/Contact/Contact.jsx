import React from 'react'
import './Contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {FaWhatsappSquare} from 'react-icons/fa'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Nikunjjv27@gmail.com</h5>
            <a href="mailto:Nikunjjv27@gmail.com" target='_blank' rel='noreferrer'>Send a mail</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>Nikunj Vadher</h5>
            <a href="https://m.me/Nikunj_Vadher" target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
          <article className="contact__option">
            <FaWhatsappSquare className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Nikunj Vadher</h5>
            <a href="https://api.whatsapp.com/send?phone=+919904286160" target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Enter Your Full Name' required/>
          <input type="emails" name='email' placeholder='Enter Email' required/>
          <textarea name="message" rows="7" placeholder='Enter Your Message ' required ></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact