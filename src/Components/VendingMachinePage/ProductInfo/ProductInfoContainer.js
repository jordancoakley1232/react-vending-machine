import { useState, useEffect, createContext } from 'react';
import "./ProductInfoContainer.scss";
// Drink List


// Import Components
import ProductInfo from "./ProductInfoComponents/ProductInfo";
import DrinkListContainer from "./ProductInfoComponents/DrinkListContainer";
import SnackListContainer from "./ProductInfoComponents/SnackListContainer";


export const ProductInfoContext = createContext();
export const SetProductInfoContext = createContext();


const ProductInfoContainer = () => {
    const [productInfo, setProductInfo] = useState({})

    useEffect(() => {
        console.log(productInfo)
    }, [productInfo])

    return (

        <div className="product-info-container">
            <ProductInfoContext.Provider value={productInfo}>
                <SetProductInfoContext.Provider value={setProductInfo}>

                    <ProductInfo />
                    <DrinkListContainer />
                    <SnackListContainer />
                </SetProductInfoContext.Provider>
            </ProductInfoContext.Provider>
        </div>


    )
}

export default ProductInfoContainer
