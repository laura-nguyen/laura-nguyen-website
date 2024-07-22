import "./Contact.scss";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xanwqyzv");

  return (
    <div className="contact-content">
      <div>
        <h2>Get in touch.</h2>
        <p>Fill out the form below and I'll get back to you shortly.</p>
        <ul className="contact-social-links">
          <li>
            <a href="https://www.linkedin.com/in/laura-nguyen/" target="_blank">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>

      {state.succeeded ? (
        <p>Thanks for your message!</p>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="full-width"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
              className="full-width"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="full-width btn--primary"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
