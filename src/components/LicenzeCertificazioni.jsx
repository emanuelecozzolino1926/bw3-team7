import SingleLicenzeCertCard from './Cards/SingleLicenzeCertCard';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const LicenzeCertificazioni = () => {
    return (
        <Row>
            <Col
                xs={12}
                md={10}
                xl={8}
                className="bg-white border border-2 rounded-2 p-0 mb-3 flex-grow-1"
            >
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title className="text-start mb-4">
                            <h3 className="m-0">Licenze e Certificazioni</h3>
                        </Card.Title>
                        <Card.Text className="">
                            <SingleLicenzeCertCard />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default LicenzeCertificazioni