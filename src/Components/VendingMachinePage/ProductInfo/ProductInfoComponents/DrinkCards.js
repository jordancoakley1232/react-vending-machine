import React, { useState, useContext, useEffect } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';

// Import Money Context form Vending Machine Componant
import { CurrentMoneyContext, SetCurrentMoneyContext, DisplayTextContext, SetDisplayTextContext } from "../../VendingMachineContainer";
// Product Info Context
import { ProductInfoContext, SetProductInfoContext } from '../ProductInfoContainer';




const DrinkCards = ({ drinkList }) => {
    const [showButton, setShowButton] = useState(false);

    // receive Context
    const currentMoney = useContext(CurrentMoneyContext);
    const setCurrentMoney = useContext(SetCurrentMoneyContext);

    const displayText = useContext(DisplayTextContext);
    const setDisplayText = useContext(SetDisplayTextContext);
    // Product Info State
    const productInfo = useContext(ProductInfoContext);
    const setProductInfo = useContext(SetProductInfoContext)





    const cards = drinkList.map(drink => {
        const getInfo = async () => {
            const settings = {
                "method": "GET",
                "headers": {
                    "x-app-id": "dd4e4dd6",
                    "x-app-key": "5b923e8b64341ac1a2dac85a21211bc2"
                }
            }
            const response = await fetch(`https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${drink.id}`, settings);
            const data = await response.json();
            setProductInfo(data.foods[0])
            // console.log(data.foods[0]);
        }


        const buyItem = () => {

            if (drink.quantity >= 1) {
                if (currentMoney >= drink.value) {
                    setCurrentMoney(currentMoney - drink.value);
                    drink.quantity = drink.quantity - 1;
                } else {
                    setDisplayText(`You need $${drink.value - currentMoney} more`);
                }
            } else {
                setDisplayText(`${drink.name} is out of stock`);
            }

        }
        return (
            <div className="drink-card" style={{ backgroundImage: `url(${drink.imageUrl})`, overflow: "hidden" }} key={drink.id}

            >
                <div className="info-buttons">
                    <InfoIcon onClick={getInfo} fontSize="small" style={{ marginLeft: "0.25rem", marginTop: "0.25rem" }} />
                    <div className="drink-stock" style={{ backgroundColor: drink.quantity <= 5 ? '#c0392b' : "#2ecc71" }}>{drink.quantity}</div>
                </div>

                <Button onClick={buyItem} className="buy-button" variant="contained" color="primary" style={{ width: "30%", textAlign: "center", alignSelf: "center", display: showButton ? "block" : "none" }}>
                    ${drink.value}
                </Button>
                <div className="product-name-container">
                    <p className="product-name">{drink.name}</p>
                </div>
            </div >
        )
    })

    return (
        <>
            {cards}
        </>
    )
}

export default DrinkCards
