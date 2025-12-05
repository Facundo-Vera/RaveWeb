import "../css/Features.css";

const Features = () => {
  return (
    <section className="py-5 -white" id="beneficios">
      <div className="container">
        <div className="mb-5">
          <h2 className="fw-bold display-6">Beneficios</h2>
          <p className="text-secondary mt-2">Ventajas que impulsan tu proyecto</p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 rounded-3  fondo-card  shadow-sm h-100">
              <div className="mb-3">
                <i className="bi bi-infinity fs-2 text-danger"></i>
              </div>
              <h5 className="fw-bold">Páginas Web Modernas</h5>
              <p className="text-secondary">
                Soluciones ideales para negocios o proyectos personales que
                buscan una{" "}
                <span style={{ color: "#8838fb" }}>
                  presencia digital sólida.{" "}
                </span>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 rounded-3 fondo-card  shadow-sm h-100">
              <div className="mb-3">
                <i className="bi bi-lightning-charge fs-2 text-danger"></i>
              </div>
              <h5 className="fw-bold">Landing Pages </h5>
              <p className="text-secondary">
                Estructura clara, llamada a la acción directa y enfoque en
                resultados.<span style={{ color: "#8838fb" }}> Ideales para lanzamientos, campañas o productos .</span>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 rounded-3 fondo-card shadow-sm h-100">
              <div className="mb-3">
                <i className="bi bi-rocket-takeoff fs-2 text-danger"></i>
              </div>
              <h5 className="fw-bold">Acompañamiento</h5>
              <p className="text-secondary">
                Garantizo acompañamiento y mantenimiento constante<span style={{ color: "#8838fb" }}> para que tu negocio siga creciendo.</span> 
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 rounded-3  fondo-card shadow-sm h-100">
              <div className="mb-3">
                <i className="bi bi-arrow-repeat fs-2 text-danger"></i>
              </div>
              <h5 className="fw-bold">Planificación</h5>
              <p className="text-secondary">
               Planifico cada etapa del proyecto para asegurar un <span style={{ color: "#8838fb" }}>desarrollo claro y eficiente</span> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
