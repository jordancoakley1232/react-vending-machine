import React, { useState } from 'react';
import "./SnackListContainer.scss";
import Pagination from "./Pagination";

import SnackCards from "./SnackCards";
import Products from "../../../../Products";

const SnackListContainer = () => {
    const snacks = Products.filter(product => {
        return product.type === "Snack";
    })

    const [snackList, setSnackList] = useState(snacks);
    const [currentPage, setCurrentPage] = useState(1);
    const [snacksPerPage, setSnacksPerPage] = useState(4);

    // Get Current Card
    const indexOfLastCard = currentPage * snacksPerPage;
    const indexOfFirstCard = indexOfLastCard - snacksPerPage;
    const currentCard = snackList.slice(indexOfFirstCard, indexOfLastCard);

    // Change Page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <div className="snack-list-container">
                <SnackCards snackList={currentCard} />
            </div>
            <Pagination drinksPerPage={snacksPerPage} totalDrinks={snackList.length} paginate={paginate} />
        </>
    )
}

export default SnackListContainer
