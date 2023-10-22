import React from "react";
import Link from "next/link";
import ContactForm from "../forms/contact-form";
import TextAnimation from "../common/text-animation";

const ContactArea = () => {
  return (
    <section className="contact-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="contact__content">
              <h2 className="overlay-title">
                <span>CONNECT</span>
              </h2>
              <h2 className="title">GET IN TOUCH</h2>
              <p>
                Connect with our team and explore the boundless possibilities within our gaming universe.
              </p>
              <div className="footer-el-widget">
                <h4 className="title">information</h4>
                <ul className="list-wrap">
                  <li>
                    <Link href="tel:123">+407399127879</Link>
                  </li>
                  <li>
                    <Link href="mailto:metaarcadeclub@gmail.com">contact@metaarcadeclub.com</Link>
                  </li>
                  <li>16192, Coastal Highway <br /> Delaware 19958, USA</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="contact__form-wrap">
              {/* form start */}
              <ContactForm />
              {/* form end */}
              <p className="ajax-response"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
