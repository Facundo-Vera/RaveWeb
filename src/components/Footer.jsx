import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer fondo text-light pt-5">
      <div className="container">
        <div className="row g-4">

          <div className="col-md-4">
            <h5 className="footer-title">Rave Web </h5>
            <p className="footer-text">
              Diseñamos y desarrollamos experiencias web modernas, enfocadas en resultados y presencia digital.
            </p>

            <div className="d-flex gap-3 mt-3">
              <a href="#" className="footer-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="footer-icon"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="footer-icon"><i className="bi bi-github"></i></a>
            </div>
          </div>

          <div className="col-md-2">
            <h6 className="footer-subtitle">Explorar</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Inicio</a></li>
              <li><a href="#beneficios">Beneficios</a></li>
              <li><a href="#trabajos">Trabajos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

        
          <div className="col-md-3">
            <h6 className="footer-subtitle">Servicios</h6>
            <ul className="list-unstyled footer-text">
              <li>Diseño Web</li>
              <li>Landing Pages</li>
              <li>E-commerce</li>
              <li>SEO & Optimización</li>
            </ul>
          </div>

        
          <div className="col-md-3">
            <h6 className="footer-subtitle">Contacto</h6>
            <p className="footer-text mb-1">
              <i className="bi bi-envelope me-2"></i>
              facundovera.dev@gmail.com
            </p>
            <p className="footer-text mb-3">
              <i className="bi bi-whatsapp me-2"></i>
              +54 9 381 2179937
            </p>

            <a href="https://wa.me/5493812179937"  target="_blank" class="btn btn-outline-light btn-sm">
              Iniciar proyecto
            </a>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom text-center">
          <span>© 2025 Rave Web. Todos los derechos reservados.</span>
      
        </div>
      </div>
    </footer>
  );
};

export default Footer;
