import React from 'react';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';

const Pagination = ({ drinksPerPage, totalDrinks, paginate }) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalDrinks / drinksPerPage); i++) {
        pageNumber.push(i);
    }



    return (
        <nav style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "2.5rem" }}>
            <ul className="pagination" >
                {pageNumber.map(number => {
                    return (
                        <li onClick={() => paginate(number)} key={number} className="page-item" style={{ display: "inline" }}>
                            <a href="#" className="page-link" >
                                {number === 1 ?
                                    <NavigateBeforeRoundedIcon style={{ width: "2em", height: "2em" }} /> :
                                    <NavigateNextRoundedIcon style={{ width: "2em", height: "2em" }} />}

                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Pagination
