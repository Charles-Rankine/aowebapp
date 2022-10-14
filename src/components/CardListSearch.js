import { useState, useEffect } from 'react'
import Card from './Card';
//import itemData from '../assets/itemData.json'


const CardListSearch = () => {
    const [allCards, setCards] = useState([]);
    const [filteredCards, setFiltered] = useState([]);
    const [categoryList, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5220/api/ItemWebApi`)
            .then(response => response.json())
            .then(data => { setCards(data); setFiltered(data); })
        
        fetch(`http://localhost:5220/api/ParentCategoriesWebAPI`)
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])

    const searchQuery = () => {
        // const value = document.querySelector("[name='searchText']").value; // Element by Query Selector
        const search = document.getElementsByName("searchText")[0].value;      // Element by Name
        const category = document.getElementsByName("Category")[0].value;

        setFiltered(allCards.filter((item) => {
            return item.itemName.toLowerCase()
                .indexOf(search.toLowerCase()) !== -1; 
        }))
        
        setFiltered(filteredCards.filter((item) => {
            return item.itemCategory
                .indexOf(category) !== -1;
        }))

        if (filteredCards.length === 0) { setFiltered(allCards) }
    }

    return (
        <div id="cardListSearch">
        <select name="Category" for="Category" class="col">
            <option value="">All categories...</option>
            

        </select>
            <div className="row justify-content-center mb-3 pt-2">
                <div className="col-3">
                    <input type="text" name="searchText" className="form-control" placeholder="Search..." />
                </div>
                <div className="col-1 text-left">
                    <button type="button" className="btn btn-primary form-control" onClick={searchQuery}>Search</button>
                </div>
            </div>
            
            <div id="cardList" className="row">
            {
                filteredCards.map((obj) => 
                (
                    <Card 
                        key = {obj.itemId}
                        itemId = {obj.itemId}
                        itemName = {obj.itemName}
                        itemCost = {obj.itemCost}
                        itemDescription = {obj.itemDescription}
                        itemImage = {obj.itemImage} 
                    />
                ))
            }
            </div>
        </div>
    )
}

export default CardListSearch;