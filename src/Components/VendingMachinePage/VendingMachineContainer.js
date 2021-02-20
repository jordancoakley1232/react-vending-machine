// React Imports
import { useState, createContext } from 'react';



// import { ProductContext } from "../App.js"
// Component Imports
import Navbar from "../Navbar/Navbar";
import VendingMachine from "./VendingMachine/VendingMachine";
import ProductInfoContainer from "./ProductInfo/ProductInfoContainer"
import "./VendingMachineContainer.scss";
// DrinkList

// API KEY
// 5b923e8b64341ac1a2dac85a21211bc2;
// Endpoint
//https://trackapi.nutritionix.com/v2/search/item?nix_item_id=


// Set context for moneyInserted
export const CurrentMoneyContext = createContext();
export const SetCurrentMoneyContext = createContext();

export const DisplayTextContext = createContext();
export const SetDisplayTextContext = createContext();




const VendingMachineContainer = ({ products }) => {
    // State for Current Money
    const [currentMoney, setCurrentMoney] = useState(0);
    const [displayText, setDisplayText] = useState('Please Make Your Selection')
    return (
        <>
            <Navbar refill={"Refill"} refillPath={"/refill"} />
            <div className="vending-info">
                <CurrentMoneyContext.Provider value={currentMoney}>
                    <SetCurrentMoneyContext.Provider value={setCurrentMoney}>
                        <DisplayTextContext.Provider value={displayText}>
                            <SetDisplayTextContext.Provider value={setDisplayText}>
                                <VendingMachine />
                                <ProductInfoContainer />
                            </SetDisplayTextContext.Provider>
                        </DisplayTextContext.Provider>
                    </SetCurrentMoneyContext.Provider>
                </CurrentMoneyContext.Provider>
            </div>
        </>

    )
}

export default VendingMachineContainer
