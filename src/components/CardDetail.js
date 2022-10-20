import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const CardDetail = () => {
    let params = useParams();

    const [cardData, setCardData] = useState({});
    const [itemId] = useState(params.itemId);

    useEffect(() => {
        console.table({MadeItTo: 'useEffect', itemId: itemId});

        fetch(`http://localhost:5220/api/ItemWebApi/${itemId}`)
            .then(response => response.json())
            .then(data => setCardData(data))
            .catch(err => { console.log(err) });
    }, [itemId])

    return (
        <div className="col-3 mb-2 px-2">
            <div className="card" style={{backgroundColor: "lightgray"}}>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <img className="card-img-top" src={cardData.itemImage} alt={'Image of ' + cardData.itemName} />
                        </li>

                        <li className="list-group-item"><h5>{cardData.itemName}</h5></li>
                        <li className="list-group-item">{cardData.itemDescription}</li>
                        <li className="list-group-item">Price: ${cardData.itemCost}</li>

                        <li className="list-group-item">
                            <Link to={'/Products/'} className='btn btn-primary'>Back to products</Link>
                        </li>

                        </ul>
                </div>
            </div>
        </div>
    )
}

export default CardDetail;