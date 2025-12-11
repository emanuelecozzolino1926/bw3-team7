import "../../assets/footerHome.css";
import { Fragment } from "react";
import linkedin from "../../assets/linkedin.svg";

const FooterHome = () => (
  <Fragment>
    <div
      className="bg-light rounded-3 border-secondary border border-opacity-25 mb-2 d-flex align-items-center p-2 gap-2"
      id="appiccicato">
      <span className="bg-warning bg-opacity-50 rounded-2 p-1">TIP</span>
      <p className="m-0 text-muted fw-medium">
        Try LinkedIn on the Windows App
      </p>
    </div>
    <div className="d-flex flex-column" id="a-container">
      <div className="d-flex justify-content-center gap-3">
        {" "}
        <a href="#">About</a>
        <a href="#">Accessibility</a>
        <a href="#">Help Center</a>
      </div>
      <div className="d-flex justify-content-center gap-3 my-2">
        <a href="#">Privacy & Terms</a>
        <a href="#">Ad Choices</a>
      </div>
      <div className="d-flex justify-content-center gap-3 my-2">
        <a href="#">Advertising</a>
        <a href="#">Business Services</a>
      </div>
      <div className="d-flex justify-content-center gap-3">
        <a href="#">Get the LinkedIn app</a>
        <a href="#">More</a>
      </div>
    </div>
    <div className="m-2 text-center">
      <img src={linkedin} alt="logo" height="14" width="56" />
      <p id="text-logo">LinkedIn Corporation © {new Date().getFullYear()}</p>
    </div>
  </Fragment>
);

export default FooterHome;
