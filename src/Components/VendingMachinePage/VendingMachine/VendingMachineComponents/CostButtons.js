import { useContext, useEffect } from 'react';
// Import CSS File
import "./CostButton.scss";
import Button from '@material-ui/core/Button';
// Context Import
import { CurrentMoneyContext, SetCurrentMoneyContext, DisplayTextContext, SetDisplayTextContext } from "../../VendingMachineContainer";



const CostButtons = () => {

    const currentMoney = useContext(CurrentMoneyContext);
    const setCurrentMoney = useContext(SetCurrentMoneyContext);

    const displayText = useContext(DisplayTextContext);
    const setDisplayText = useContext(SetDisplayTextContext);

    useEffect(() => {
        currentMoney > 0 ? setDisplayText(`You have inserted $${currentMoney}`) : setDisplayText("Please Make a Selection");
    }, [currentMoney])


    const insertMoney = (e) => {
        currentMoney + Number(e.currentTarget.value) <= 10 ?
            setCurrentMoney(currentMoney + Number(e.currentTarget.value)) :
            setDisplayText("Maximum Amount is $10");
    }
    return (
        <div className="cost-buttons">
            <Button variant="contained" color="default" value={.50} onClick={insertMoney}>
                50<span>&#162;</span>
            </Button>
            <Button variant="contained" color="default" value={1.00} onClick={insertMoney}>
                $1
            </Button>
            <Button variant="contained" color="default" value={5.00} onClick={insertMoney}>
                $5
            </Button>
        </div>
    )
}

export default CostButtons
