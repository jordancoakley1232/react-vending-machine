import React, { useState, useContext, useEffect } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';

// Import Money Context form Vending Machine Componant
import { CurrentMoneyContext, SetCurrentMoneyContext, DisplayTextContext, SetDisplayTextContext } from "../../VendingMachineContainer";
import { ProductInfoContext, SetProductInfoContext } from '../ProductInfoContainer';

const SnackCards = ({ snackList }) => {

    const [showButton, setShowButton] = useState(false);

    // receive Context
    const currentMoney = useContext(CurrentMoneyContext);
    const setCurrentMoney = useContext(SetCurrentMoneyContext);

    const displayText = useContext(DisplayTextContext);
    const setDisplayText = useContext(SetDisplayTextContext);

    // Product Info Context
    const productInfo = useContext(ProductInfoContext);
    const setProductInfo = useContext(SetProductInfoContext);

    const snackCards = snackList.map(snack => {
        // Fetch Item Data
        const getInfo = async () => {
            const settings = {
                "method": "GET",
                "headers": {
                    "x-app-id": "dd4e4dd6",
                    "x-app-key": "5b923e8b64341ac1a2dac85a21211bc2"
                }
            }
            const response = await fetch(`https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${snack.id}`, settings);
            const data = await response.json();
            setProductInfo(data.foods[0])
        }

        // Buy Items Funciton
        const buyItem = () => {

            if (snack.quantity >= 1) {
                if (currentMoney >= snack.value) {
                    setCurrentMoney(currentMoney - snack.value);
                    snack.quantity = snack.quantity - 1;
                } else {
                    setDisplayText(`You need $${snack.value - currentMoney} more`);
                }
            } else {
                setDisplayText(`${snack.name} is out of stock`);
            }

        }
        return (
            <div className="snack-card" style={{ backgroundImage: `url(${snack.imageUrl})`, overflow: "hidden" }} key={snack.id}

            >
                <div className="snack-info-buttons">
                    <InfoIcon fontSize="small" style={{ marginLeft: "0.25rem", marginTop: "0.25rem" }} onClick={getInfo} />
                    <div className="snack-stock" style={{ backgroundColor: snack.quantity <= 5 ? '#c0392b' : "#2ecc71" }}>{snack.quantity}</div>
                </div>

                <Button onClick={buyItem} className="buy-button" variant="contained" color="primary" style={{ width: "30%", textAlign: "center", alignSelf: "center", display: showButton ? "block" : "none" }}>
                    ${snack.value}
                </Button>
                <div className="snack-name-container">
                    <p className="snack-name">{snack.name}</p>
                </div>
            </div >
        )
    })


    return (
        <>
            {snackCards}
        </>
    )
}

export default SnackCards
