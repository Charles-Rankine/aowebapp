import React, { useState } from 'react'
import Card from "./Card"

const CardList = () => {    
    const [cardData, setState] = useState([]);

    React.useEffect(() => {
        fetch("http://localhost:5220/api/ItemWebApi")
            .then(response => response.json())
            .then(data => setState(data))
    }, [])

    return (
        <div className="row"> 
        {
            cardData.map((obj) => 
            (
                <Card 
                    key = {obj.itemId}
                    itemName = {obj.itemName}
                    itemCost = {obj.itemCost}
                    itemDescription = {obj.itemDescription}
                    itemImage = {obj.itemImage} 
                />
            ))
        }
        </div>
    )
}

export default CardList;