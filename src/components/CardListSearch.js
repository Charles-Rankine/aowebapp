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
        const categoryId = getCategoryId(document.getElementsByName("Category")[0].value);
        
        setFiltered(allCards);

        if (search !== "") 
        {
            setFiltered(allCards.filter((item) => 
            {
                return item.itemName.toLowerCase()
                    .indexOf(search.toLowerCase()) !== -1;
            }))
        }

        if (categoryId !== undefined)
        {
            setFiltered(filteredCards.filter((item) => 
            {
                 return item.categoryId === categoryId; 
            }))
        }

        console.log(`Search: ${search} || CategoryId: ${categoryId}`);
        filteredCards.map((p) => (console.log(`ItemName: ${p.itemName} (${p.itemName.toLowerCase().indexOf(search.toLowerCase()) !== -1})|| ItemCategory: ${p.categoryId} (${p.categoryId === categoryId})`)))

        if (search === "" && categoryId === undefined) 
        {
            console.log("RESET");
            setFiltered(allCards) 
        }
    }

    const getCategoryId = (categoryString) => {
        for(var i = 0; i < categoryList.length; i++) {
             if (categoryList[i].categoryName === categoryString) {
                return categoryList[i].categoryId;
             }
        }
    }
    
    const getCategoryNames = (categories) => {
        var names = [];

        for(var i = 0; i < categories.length; i++) {
            names.push(categories[i].categoryName);
        }

        return names
    }

    return (
        <div id="cardListSearch">
        <select name="Category" htmlFor="Category" className="col">
        <option value="">All categories...</option>
        {
            getCategoryNames(categoryList).map((cat) => 
            (
                <option key={cat} value={cat}>{cat}</option>
            ))
        }
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