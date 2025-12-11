import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar1 = function () {
  const [profileData, setProfileData] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [allProfiles, setAllProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  const apiUrl = "https://striveschool-api.herokuapp.com/api/profile/me";
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZmU0NWQzMjJmNTAwMTUxMDc2YzIiLCJpYXQiOjE3NjUyNzcyNTMsImV4cCI6MTc2NjQ4Njg1M30.6vFhBSWn_BZLNsof5SqbWvb4UQfXAP1wchtNpfCrZmI";

  const getBanner = () => {
    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Collegato al server ${response.status}`);
          return response.json();
        } else {
          throw new Error(
            `Errore nella connessione al server ${response.status}`
          );
        }
      })
      .then((data) => {
        setProfileData(data);
      })
      .catch((error) => {
        console.log(`Impossibile accedere al server ${error}`);
      });
  };

  const getAllProfiles = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Collegato al server ${response.status}`);
          return response.json();
        } else {
          throw new Error(
            `Errore nella connessione al server ${response.status}`
          );
        }
      })
      .then((data) => {
        setAllProfiles(data);
      })
      .catch((error) => {
        console.log(`Impossibile accedere al server ${error}`);
      });
  };

  useEffect(() => {
    getBanner();
    getAllProfiles();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProfiles([]);
      return;
    }

    const q = searchQuery.toLowerCase();
    const results = allProfiles.filter((p) =>
      `${p.name} ${p.surname}`.toLowerCase().includes(q)
    );
    setFilteredProfiles(results);
  }, [searchQuery, allProfiles]);

  return (
    <>
      {/* desktop-------------------------------------------------------------- */}
      {/* search in mobile */}
      <div className="fixed-top d-lg-none pt-1  d-flex align-items-center justify-content-center w-100 bg-white p-1">
        <Link to={"/profile"}>
          <img
            style={{ width: "35px", height: "35px" }}
            src={profileData?.image}
            alt="pic-profile"
            className="rounded-circle"
          />
        </Link>
        <div style={{ position: "relative", flex: 1 }} className="mx-3">
          <Form className="d-inline w-100">
            <Row>
              <Col xs="auto" className="w-100">
                <Form.Control
                  id="search"
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2 rounded-pill w-100"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Col>
            </Row>
          </Form>
          {filteredProfiles.length > 0 && (
            <div
              className="bg-white border rounded mt-1"
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                zIndex: 9999,
                maxHeight: "300px",
                overflowY: "auto",
              }}
            >
              {filteredProfiles.map((p) => (
                <Link
                  key={p._id}
                  to={`/profile/${p._id}`}
                  className="d-flex align-items-center p-2 text-decoration-none text-dark"
                  onClick={() => setSearchQuery("")}
                >
                  <img
                    src={p.image}
                    alt="pic-profile"
                    className="rounded-circle me-2"
                    style={{ width: "35px", height: "35px" }}
                  />
                  <span>
                    {p.name} {p.surname}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-sort-down ms-3"
          viewBox="0 0 16 16"
        >
          <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-chat-right-dots-fill ms-3"
          viewBox="0 0 16 16"
        >
          <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
        </svg>
      </div>
      {/* fine search in mobile----------------------------------------------- */}
      <Container
        fluid
        id="myNav"
        className="d-flex  justify-content-lg-center justify-content-around  align-items-center sticky-lg-top fixed-bottom pt-1 bg-white"
      >
        {/* logo + search ---------------------------------------------------------- */}
        <div className="d-none d-lg-flex align-items-center me-5 w-25">
          <Link to={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              fill="blue"
              className="bi bi-linkedin "
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </Link>
          <div style={{ position: "relative", flex: 1 }} className="ms-3">
            <Form className="d-inline w-100">
              <Row>
                <Col xs="auto" className="w-100">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2 rounded-pill w-100"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </Col>
              </Row>
            </Form>
            {filteredProfiles.length > 0 && (
              <div
                className="bg-white border rounded mt-1"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  zIndex: 9999,
                  maxHeight: "300px",
                  overflowY: "auto",
                }}
              >
                {filteredProfiles.map((p) => (
                  <Link
                    key={p._id}
                    to={`/profile/${p._id}`}
                    className="d-flex align-items-center p-2 text-decoration-none text-dark"
                    onClick={() => setSearchQuery("")}
                  >
                    <img
                      src={p.image}
                      alt="pic-profile"
                      className="rounded-circle me-2"
                      style={{ width: "35px", height: "35px" }}
                    />
                    <span>
                      {p.name} {p.surname}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* fine logo + search-------------------------------------------------- */}
        {/* inizio icone -------------------------------------------------------- */}
        <div className="bg-white">
          <Row className="text-nowrap">
            <Col>
              <Link to={"/"}>
                <span
                  id="icon"
                  className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-house-door-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                  </svg>
                  <p className="mb-0">Home</p>
                </span>
              </Link>
            </Col>
            <Col className="ms-1">
              <a
                id="icon"
                className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>
                <p className="mb-0">Rete</p>
              </a>
            </Col>
            <Col className="ms-1">
              <a
                id="icon"
                className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-briefcase-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                </svg>
                <p className="mb-0">Lavoro</p>
              </a>
            </Col>
            <Col className="ms-1">
              <a
                id="icon"
                className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-chat-right-dots-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                </svg>
                <p className="mb-0">Messagistica</p>
              </a>
            </Col>
            <Col className="ms-1">
              <a
                id="icon"
                className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-bell-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                </svg>
                <p className="mb-0">Notifiche</p>
              </a>
            </Col>
            <Col className="d-none d-lg-inline">
              <NavDropdown
                title={
                  <div className="d-flex flex-column align-items-center">
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={profileData?.image}
                      alt="pic-profile"
                      className="rounded-circle"
                    />
                    <div className="d-flex align-items-center">
                      <span id="NavSpan">Tu</span>
                      <span className="ms-1">▼</span>
                    </div>
                  </div>
                }
                className="ms-2"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to={"/profile/6937fe45d322f500151076c2"}
                >
                  Visualizza profilo
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
            <Col className="d-none d-lg-inline">
              <NavDropdown
                title={
                  <div className="d-flex flex-column align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-grid-3x3-gap-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                    </svg>
                    <div className="d-flex align-items-center">
                      <span id="NavSpan">Per le aziende</span>
                      <span className="ms-1">▼</span>
                    </div>
                  </div>
                }
                className="ms-2"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
          </Row>
        </div>
        {/* fine icone ------------------------------------------------------------------------ */}
      </Container>
      {/* // mobile----------------------------------------------------------------------------- */}
    </>
  );
};
export default Navbar1;
