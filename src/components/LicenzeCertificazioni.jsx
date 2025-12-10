import SingleLicenzeCertCard from './Cards/SingleLicenzeCertCard';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const LicenzeCertificazioni = () => {
    return (
        <Card className="text-center mb-3">
            <Card.Body>
                <Card.Title className="text-start mb-4">
                    <h3 className="m-0">Licenze e Certificazioni</h3>
                </Card.Title>
                <Card.Text>
                    <SingleLicenzeCertCard />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default LicenzeCertificazioni