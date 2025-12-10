import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SingleCompentenzeCard from './Cards/SingleCompetenzeCard';


const Compentenza = () => {
    return (
        <Card className="text-center mb-3">
            <Card.Body>
                <Card.Title className="text-start mb-4">
                    <h3 className="m-0">Competenze</h3>
                </Card.Title>
                <Card.Text className="">
                    <SingleCompentenzeCard />
                    <hr />
                    <SingleCompentenzeCard />
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Button variant="light" className="w-100 text-black bg-light border-0 rounded-0">Mostra tutte le compentenze <i className="bi bi-arrow-right-short"></i></Button>
            </Card.Footer>
        </Card>
    )
}

export default Compentenza