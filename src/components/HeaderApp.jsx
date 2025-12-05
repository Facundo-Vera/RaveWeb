import "../css/Header.css";

const HeaderApp = () => {
  return (
    <header className=" position-relative min-vh-60 w-100 ">
      <nav className=" barra d-flex align-items-center justify-content-between position-fixed top-0 py-3 px-4 w-100 z-3">
        <div className="d-flex gap-4">
          <a className="nav-link-custom" href="#">Inicio</a>
          <a className="nav-link-custom" href="#beneficios">Beneficios</a>
        </div>

       <div className="col-4 text-center d-none d-sm-block "> 
    <span className="brand-logo">RAVE</span>
</div>
        <div className="d-flex gap-4">
          <a className="nav-link-custom"  href="#trabajos">Trabajos</a>
          <a className="nav-link-custom"  href="#contacto">Contacto</a>
        </div>
      </nav>
      <div className="header-content position-relative z-1 d-flex flex-column align-items-center justify-content-center text-center text-white px-5 pt-5 min-vh-100">
        <h1 className=" header-title ">TRANSFORMA TU MARCA </h1>
        <p className="fs-5 fs-md-4 fw-light opacity-75 mt-2">
          Estrategia, diseño y desarrollo.{" "}
        </p>

        <a
          href="https://wa.me/3812179937"
          target="_blank"
          className="header-cta d-inline-block  text-white text-uppercase fw-medium border border-white py-2 px-4 mt-3"
        >
          EMPECEMOS TU PROYECTO
        </a>
        <div className="scroll-indicator">
          SCROLL PARA EXPLORAR
          <div className="arrow">↓</div>
        </div>
      </div>
    </header>
  );
};

export default HeaderApp;
