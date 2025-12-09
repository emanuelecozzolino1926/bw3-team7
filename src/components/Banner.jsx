import "../assets/banner.css";

const Banner = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col col-12 col-xl-8">
          <div className="card">
            <div className="img-container position-relative">
              <img
                src="https://placebear.com/300/100"
                alt="banner-img"
                className="w-100"
              />
              <img
                src="https://placebear.com/200/200"
                alt="profile-img"
                id="pic"
              />
            </div>
            <div className="card-body">
              <div className="d-flex gap-2 align-items-center">
                <h5 className="card-title m-0">Stefano Casasola</h5>
                <i className="bi bi-volume-up-fill fs-3"></i>
                <p className="m-0">he/him</p>
              </div>
              <p className="card-text m-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
