import "../assets/banner.css";

const Banner = () => {
  return (
    <div className="card">
      <div className="img-container position-relative">
        <img
          src="https://placebear.com/300/100"
          alt="banner-img"
          className="w-100"
        />
        <img src="https://placebear.com/200/200" alt="profile-img" id="pic" />
      </div>
      <div className="card-body">
        <div className="d-flex align-items-center gap-5">
          <div>
            <div className="d-flex gap-2 align-items-center">
              <h5 className="card-title m-0 fs-2 mb-2">Stefano Casasola</h5>
              <i className="bi bi-volume-up-fill fs-3"></i>
              <p className="m-0 text-muted">he/him</p>
            </div>
            <p className="card-text m-0">
              Founder & Software Developer @ Nucleode SRL - Educator @ EPICODE -
              IT Consultant
            </p>
            <p className="card-text m-0 d-xl-none">
              EPICODE . Universita degli studi di udine
            </p>
            <p className="card-text m-0 text-muted">
              Gorizia, Friuli-venezia giulia, italy <a href="#">Contact info</a>
            </p>
          </div>
          <div className="d-none d-xl-block">
            <p className="m">EPICODE</p>
            <p className="">Universita degli studi di napoli</p>
          </div>
        </div>
        <p className="py-3">500+ connections</p>
        <div className="d-flex gap-2 align-items-center mb-4">
          <button
            className="px-3 rounded-5 border-0 py-2 text-light fw-bold"
            id="connect">
            <i class="bi bi-person-plus-fill"></i> Connect
          </button>
          <button className="px-3 rounded-5 py-2 fw-bold" id="message">
            <i class="bi bi-telegram"></i> Message
          </button>
          <button
            className="px-3 rounded-5 py-2 border border-dark fw-bold"
            id="dots">
            ...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
