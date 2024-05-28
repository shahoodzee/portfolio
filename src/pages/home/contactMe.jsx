import React from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const ContactMe = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wdyaoso', 'template_qryelpe', form.current, {
        publicKey: 'rFcKP_erNWFcl9RG3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          I a, super active across social media platforms.
        </p>
      </div>
      <form className="contact--form--container" ref={form} onSubmit={sendEmail}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="user_first_name"
              id="user_first_name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="user_last_name"
              id="user_last_name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="user_email"
              id="user_email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone_number"
              id="phone_number"
              required
            />
          </label>
        </div>
        <label htmlFor="form_subject" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select name="form_subject" id="form_subject" className="contact--input text-md">
            <option>Select One...</option>
            <option>General Discussion</option>
            <option>Mobile Application</option>
            <option>Full stack Website</option>
            <option>Full stack Website (.NET)</option>
            <option>Backend (Django)</option>
            <option>Frontend (React Js)</option>
            
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button type="submit" value="Send" className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  )
};

export default ContactMe;
