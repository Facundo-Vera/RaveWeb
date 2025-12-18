import Badges from "../components/Badges";
import "../css/Contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactApp = () => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setShowSuccessMessage(false);
    emailjs
      .sendForm("service_10wu4lv", "template_vbbo54c", form.current, {
        publicKey: "Sboa-LfCUF4tXDho4",
      })
      .then(
        () => {
          console.log("SUCCESS!");

          form.current.reset();
          setShowSuccessMessage(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="py-5 container" id="contacto">
      <h2 className="fw-bold display-6">Contacto</h2>
      <div className="row ">
        <div className="col-12 col-md-6 order-md-1">
          <div className="d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <Badges size="medium" />
          </div>
        </div>

        <form
          className="mb-3 col-12 col-md-6 order-md-2 fondo-form "
          ref={form}
          onSubmit={sendEmail}
        
        >
          {showSuccessMessage && (
            <div className="alert alert-success" role="alert">
              ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo
              pronto. 😊
            </div>
          )}

          <label htmlFor="inputNombre" className="form-label mb-2">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNombre"
            name="user_name"
            placeholder="Nombre completo"
          />

          <label htmlFor="inputEmail" className="form-label mt-2">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name="user_email"
            placeholder="email@example.com"
          />

          <div className="mb-3">
            <label htmlFor="textareaMensaje" className="mt-2 form-label">
              Mensaje
            </label>
            <textarea
              className="form-control"
              id="textareaMensaje"
              rows="3"
              name="message"
            ></textarea>
          </div>

          <button className="btn-metalizado justify-content-end" type="submit" value="Send">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactApp;
