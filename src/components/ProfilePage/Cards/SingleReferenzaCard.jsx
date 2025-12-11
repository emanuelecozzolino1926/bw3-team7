import { Container, Row, Col } from 'react-bootstrap'

const SingleReferenzaCard = () => {
    return (
        <Container className="mb-3">
            <Row className="d-flex justify-content-center">
                <div className='d-flex px-3'>
                    <div className="d-inline-block h-100 text-start">
                        <img src="https://media.licdn.com/dms/image/v2/D4D03AQHSBhlNPGgFfQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1731257845638?e=1767225600&v=beta&t=6dKDHsRewNC8LSC2pQq28yypUy94cXwRgHTfgguDYl0" alt="Roberta Matera" className='d-inline rounded-5 me-2' style={{ width: "60px" }}></img>
                    </div>


                    <div className="d-inline-block h-100 text-start">
                        <h5 className="fw-bold m-0 d-inline">Roberta Matera</h5>

                        <p className="m-0">
                            Front-end developer at AlmavivA Digitaltec | Angular, React, Typescript - Bring your needs to life, line by line
                        </p>
                        <p className="m-0 text-secondary">11 dicembre 2024, Roberta e Stefano hanno studiato insieme</p>

                        <p className='mt-3'>Ho avuto il privilegio di partecipare al bootcamp presso Strive School (EPICODE) sotto la guida del docente Stefano Casasola e posso affermare che la sua competenza, professionalità e dedizione sono state determinanti per il mio percorso di apprendimento. Il suo approccio didattico è stato sempre chiaro, strutturato e orientato alla pratica, il che mi ha permesso di sviluppare rapidamente le competenze necessarie per entrare nel mondo della programmazione web.</p>
                        <p className='mt-3'>Mi ha motivato costantemente a dare il massimo, fornendo feedback costruttivi che mi hanno permesso di crescere sia dal punto di vista tecnico che personale.</p>
                    </div>



                </div>

                <hr />

                <div className='d-flex px-3'>
                    <div className="d-inline-block h-100 text-start">
                        <img src="https://media.licdn.com/dms/image/v2/C4D03AQHc4qBmvdXLYw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1613932805797?e=1767225600&v=beta&t=cEU1Wp6W2kdvYwv6wdpIujmT_nbtfezx-6LdDwscGmY" alt="Vardan Galstyan" className='d-inline rounded-5 me-2' style={{ width: "60px" }}></img>
                    </div>


                    <div className="d-inline-block h-100 text-start">
                        <h5 className="fw-bold m-0 d-inline">Vardan Galstyan</h5>

                        <p className="m-0">
                            Bridging Startups & Ecosystems | Connecting Founders & Tech Teams | Developer with a Strategic Mind
                        </p>
                        <p className="m-0 text-secondary"> 8 ottobre 2021, Vardan e Stefano hanno studiato insieme</p>

                        <p className='mt-3'>I strongly believe that despite the professional skills, human values are the most important. But when a person is both professional and has tons of other values, thats what makes him/her a unique asset in any team. For anyone who has to read this reccommendation, I have to say don't waste a second, because your professional search is going to end here and now. </p>
                    </div>



                </div>
            </Row>


        </Container>
    )
}

export default SingleReferenzaCard