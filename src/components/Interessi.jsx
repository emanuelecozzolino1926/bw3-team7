import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SingleInteressiCard from './Cards/SingleInteressiCard';


const Interessi = () => {
    return (
        <Card className="text-center mb-3">
            <Card.Body>
                <Card.Title className="text-start mb-4">
                    <h3 className="m-0">Interessi</h3>
                    
                </Card.Title>
                <Card.Text className="">
                    <SingleInteressiCard />
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Button variant="light" className="w-100 text-black bg-light border-0 rounded-0">Mostra tutte le aziende <i className="bi bi-arrow-right-short"></i></Button>
            </Card.Footer>
        </Card>
    )
}

export default Interessi