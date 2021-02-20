import React from 'react';
import "./ProductList.scss";
import ProductCard from "../ProductCard/ProductCard";
// Material Components
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';

// pass into Product List if fail filteredDrinks, filteredSnacks
const ProductList = ({ filteredProducts }) => {
    const productCards = filteredProducts.map((item) => {
        const refill = () => {
            if (item.quantity < 10) {
                item.quantity = item.quantity + (10 - item.quantity);
            }
            console.log(item.quantity);
        }
        return (

            <div className="refill-card" style={{ backgroundImage: `url(${item.imageUrl})`, overflow: "hidden" }} key={item.id}>
                <div className="info-buttons">
                    <div className="drink-stock" style={{ backgroundColor: item.quantity <= 5 ? '#c0392b' : "#2ecc71" }}>{item.quantity}</div>
                </div>

                <Button className="refill-button" variant="contained" onClick={refill} color={item.quantity === 10 ? "disabled" : "secondary"} style={{ width: "30%", textAlign: "center", alignSelf: "center" }}>
                    {item.quantity !== 10 ? "Refill" : "Max"}
                </Button>
                <div className="product-name-container" style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
                    <p className="product-name">{item.name}</p>
                </div>
            </div >

        )
    })

    return (
        <div className="product-list">
            {productCards}
        </div>
    )
}

export default ProductList
