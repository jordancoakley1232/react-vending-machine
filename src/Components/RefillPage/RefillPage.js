import { useState, useEffect } from 'react';


// Import Nav Bar
import Navbar from "../Navbar/Navbar";

// Import Search Bar
import SearchBox from './SearchBox/SearchBox'
import ProductList from "./ProductList/ProductList";
// import Drinks from "../../Drinks";
// import Snacks from "../../Snacks";
import Products from "../../Products"






const RefillPage = () => {
    // Create Drink State
    const [products, setProducts] = useState([])
    // Create Search Field State
    const [searchField, setSearchField] = useState("");


    useEffect(() => {
        setProducts(Products)
    }, [])

    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchField.toLowerCase())
    })

    const handleChange = e => {
        setSearchField(e.currentTarget.value)
    }

    // Pass into product list if fail
    // filteredDrinks={filteredDrinks} filteredSnacks={filteredSnacks}

    return (
        <div style={{ fontFamily: "'Poppins'" }}>
            <Navbar vendingMachine={"Vending Machine"} vendingMachinePath={"/"} style={{ fontFamily: "'Poppins'" }} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Search Bar */}
                <SearchBox placeholder='Search Product' handleChange={handleChange} />
                {/* Cards Container */}
                <ProductList filteredProducts={filteredProducts} />
            </div>
        </div>
    )
}

export default RefillPage
