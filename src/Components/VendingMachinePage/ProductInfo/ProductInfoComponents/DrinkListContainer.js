import React, { useState } from 'react';
import "./DrinkListContainer.scss";
import Pagination from "./Pagination";


// Import Drinks
// import Drinks from "../../../../Drinks";
import DrinkCards from "./DrinkCards";

import Products from "../../../../Products"



const DrinkListContainer = () => {
    const drinks = Products.filter(product => {
        return product.type === "Drink"
    })
    const [drinkList, setDrinkList] = useState(drinks);
    const [currentPage, setCurrentPage] = useState(1);
    const [drinksPerPage, setDrinksPerPage] = useState(4);


    // Get Current Card
    const indexOfLastCard = currentPage * drinksPerPage;
    const indexOfFirstCard = indexOfLastCard - drinksPerPage;
    const currentCard = drinkList.slice(indexOfFirstCard, indexOfLastCard);

    // Change Page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }



    return (
        <>
            {/* <div className="drink-label-container">
                <h1 className="drink-label">Drinks</h1>
            </div> */}
            <div className="drink-list-container">
                <DrinkCards drinkList={currentCard} />
            </div>
            <Pagination drinksPerPage={drinksPerPage} totalDrinks={drinkList.length} paginate={paginate} />

        </>
    )
}

export default DrinkListContainer
