import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const ContactMe = (props) => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    user_first_name: '',
    user_last_name: '',
    user_email: '',
    phone_number: '',
    form_subject: '',
    message: '',
    checkbox: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormValues({
      ...formValues,
      phone_number: value,
    });
  };

  const validateForm = () => {
    const { user_first_name, user_last_name, user_email, phone_number, form_subject, message, checkbox } = formValues;
    if (!user_first_name || !user_last_name || !user_email || !phone_number || !form_subject || !message || !checkbox) {
      alert('Please fill in all fields and accept the terms.');
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .sendForm('service_wdyaoso', 'template_qryelpe', form.current, 'rFcKP_erNWFcl9RG3')
      .then(
        () => {
          alert('Your message was sent successfully');
          setFormValues({
            user_first_name: '',
            user_last_name: '',
            user_email: '',
            phone_number: '',
            form_subject: '',
            message: '',
            checkbox: false,
          });
        },
        (error) => {
          alert("Some error occurred");
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
          I am super active across social media platforms.
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
              value={formValues.user_first_name}
              onChange={handleChange}
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
              value={formValues.user_last_name}
              onChange={handleChange}
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
              value={formValues.user_email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <PhoneInput
              defaultCountry="US"
              className="contact--input text-md"
              name="phone_number"
              id="phone_number"
              value={formValues.phone_number}
              onChange={handlePhoneChange}
              required
            />
          </label>
        </div>
        <label htmlFor="form_subject" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            name="form_subject"
            id="form_subject"
            className="contact--input text-md"
            value={formValues.form_subject}
            onChange={handleChange}
            required
          >
            <option value="">Select One...</option>
            <option value="General Discussion">General Discussion</option>
            <option value="Mobile Application">Mobile Application</option>
            <option value="Full stack Website">Full stack Website</option>
            <option value="Full stack Website (.NET)">Full stack Website (.NET)</option>
            <option value="Backend (Django)">Backend (Django)</option>
            <option value="Frontend (React Js)">Frontend (React Js)</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            value={formValues.message}
            onChange={handleChange}
            placeholder="Type your message..."
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={formValues.checkbox}
            onChange={handleChange}
            required
          />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button type="submit" value="Send" className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
