import SingleEsperienzaCard from './Cards/SingleEsperienzaCard';
import Card from 'react-bootstrap/Card';

const Esperienza = () => {
    return (
        <Card className="text-center mb-3">
            <Card.Body>
                <Card.Title className="text-start mb-4">
                    <h3 className="m-0">Esperienza</h3>
                </Card.Title>
                <Card.Text className="">
                    <SingleEsperienzaCard />
                    <hr />
                    <SingleEsperienzaCard />
                    <hr />
                    <SingleEsperienzaCard />
                    <hr />
                    <SingleEsperienzaCard />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Esperienza