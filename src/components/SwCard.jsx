import { Card } from "react-bootstrap"

const SwCard = ({results}) => {


    return (
        <Card className='bg-dark text-white card' key={data.results}  style={{ width: '20rem' }}>
            {/* <Card.Img variant="top" src={id.image}/> */}
            <Card.Body>
                <Card.Title>{results.name}</Card.Title>
                <Card.Text className='m-0 cardText'>Origen: {results.gender}</Card.Text>
                <Card.Text className='m-0 cardText'>Coordenadas: {results.birth_year}</Card.Text>
                <Card.Text className='m-0 cardText'>Distancia desde DSCVR: {results.height}</Card.Text>
                <Card.Text className='m-0 cardText'>Distancia a la Luna: {results.hair_color}</Card.Text>
            </Card.Body>
        </Card>



    )
    
}

export default SwCard