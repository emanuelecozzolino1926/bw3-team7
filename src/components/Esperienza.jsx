import SingleEsperienzaCard from './Cards/SingleEsperienzaCard';
import Card from 'react-bootstrap/Card';

const Esperienza = () => {
    return (
        <Card className="text-center mb-3">
            <Card.Body>
                {/*  */}
                <Card.Title className="text-start mb-4 d-flex flex-row justify-content-between">
                    <h3 className="m-0">Esperienza</h3>
                    <div>
                        <a href="#" className="me-4 text-dark fs-4"><i class="bi bi-plus-lg"></i></a>
                        <a href="#" className="me-5 text-dark fs-4"><i class="bi bi-pen" ></i></a>
                    </div>
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
        </Card >
    )
}

export default Esperienza