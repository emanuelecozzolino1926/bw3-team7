import "../../assets/footerHome.css";
import linkedin from "../../assets/linkedin.svg";

const footerLinks = [
  ["Informazioni", "Accessibilita'"],
  ["Centro assistenza", "Privacy e condizioni"],
  ["Opzioni per gli annunci pubblicitari"],
  ["Pubblicita'", "Servizi alle aziende"],
  ["Scarica l'app LinkedIn", "Altro"],
];

const FooterHome = () => (
  <>
    <div
      className="bg-light rounded-3 border-secondary border border-opacity-25 mb-2 d-flex align-items-center p-2 gap-2"
      id="appiccicato">
      <span className="bg-warning bg-opacity-50 rounded-2 p-1">TIP</span>
      <p className="m-0 text-muted fw-medium">
        Prova LinkedIn nell'app di windows!
      </p>
    </div>
    <div id="a-container" className="d-flex flex-column">
      {footerLinks.map((row, i) => (
        <div key={i} className="d-flex justify-content-center gap-3 my-1">
          {row.map((link, j) => (
            <a key={j} href="#" className="anchor">
              {link}
            </a>
          ))}
        </div>
      ))}
    </div>
    <div className="m-2 text-center">
      <img src={linkedin} alt="logo" height="14" width="56" />
      <p id="text-logo">LinkedIn Corporation © {new Date().getFullYear()}</p>
    </div>
  </>
);

export default FooterHome;
