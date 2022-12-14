import { Link } from 'react-router-dom';

const Card = ({ itemId, itemName, itemDescription, itemCost, itemImage }) => {    
    return (
        <div className="col-3 mb-2 px-2">
            <div className="card" style={{backgroundColor: "lightgray"}}>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <img className="card-img-top" src={itemImage} alt="" />
                        </li>

                        <li className="list-group-item"><h5>{itemName}</h5></li>
                        <li className="list-group-item">{itemDescription}</li>
                        <li className="list-group-item">Price: ${itemCost}</li>

                        <li className="list-group-item">
                            <Link to={'/Products/' + itemId} className='btn btn-primary'>Details</Link>
                        </li>

                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Card;