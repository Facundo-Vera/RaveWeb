import "../css/Contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactApp = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(false);

    emailjs
      .sendForm("service_10wu4lv", "template_vbbo54c", form.current, {
        publicKey: "Sboa-LfCUF4tXDho4",
      })
      .then(
        () => {
          form.current.reset();
          setSent(true);
        },
        (error) => {
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section className="contact-minimal" id="contacto">
      <div className="contact-wrapper">
        {/* INFO */}
        <div className="contact-info">
          <h2 className="fw-bold display-6">Contacto</h2>

          <p className="contact-info-text">
            Completá el formulario para agendar una reunión. Queremos conocer tu
            idea, entender tus objetivos y transformar tu proyecto en una
            experiencia digital sólida.
          </p>

          <div className="contact-divider" />

          <p className="contact-info-text">
            Si tenés una idea, un proyecto en mente o simplemente querés mejorar
            tu presencia online, este es el primer paso.
          </p>
        </div>

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail} className="contact-form-clean">
         

          <div className="field">
            <label>Nombre</label>
            <input
              type="text"
              name="user_name"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="field">
            <label>Mensaje</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Contanos sobre tu proyecto..."
              required
            />
          </div>
           {sent && (
            <span className="contact-success bg-success text-white px-3 py-2 rounded mt-3 d-inline-block">
              Mensaje enviado correctamente. 🚀
            </span>
          )}

          <button type="submit" className="contact-cta">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactApp;
