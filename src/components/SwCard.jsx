

const SwCard = ({ item }) => {


    return (
        <Card className='bg-dark text-white card' key={item.name}  style={{ width: '20rem' }}>
            {/* <Card.Img variant="top" src={id.image}/> */}
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className='m-0 cardText'>Origen: {item.gender}</Card.Text>
                <Card.Text className='m-0 cardText'>Coordenadas: {item.birth_year}</Card.Text>
                <Card.Text className='m-0 cardText'>Distancia desde DSCVR: {item.height}</Card.Text>
                <Card.Text className='m-0 cardText'>Distancia a la Luna: {item.hair_color}</Card.Text>
            </Card.Body>
        </Card>



    )
    
}

export default SwCard