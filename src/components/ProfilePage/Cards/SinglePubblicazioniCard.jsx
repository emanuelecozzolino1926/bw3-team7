import { Container, Row, Col } from 'react-bootstrap'

const SinglePubblicazioniCard = () => {
    return (
        <Container className="mb-3">
            <Row className="d-flex justify-content-center">
                    <div className="text-start">
                        <p className="fw-bold m-0">"Corti si nasce: linguaggi e tecniche del videoclip"</p>
                        <p className="mt-3"> Tesi di laurea triennale in Scienze e Tecnologie Multimediali presso l'Università degli Studi di Udine.</p>
                    </div>
            </Row>
        </Container>
    )
}

export default SinglePubblicazioniCard