// Money in the Machine
// import { MoneyContext, MoneyInsertedContext } from '../VendingMachineContainer';
import "./VendingMachine.scss";

// Component Imports
import Display from "./VendingMachineComponents/Display";
import Image from "./VendingMachineComponents/Image"
import CostButtons from "./VendingMachineComponents/CostButtons";

// Needed Components
// Display (to show current money in machine)(Should Initialize as Please make a selection)
// Image
// Cost Buttons and Refund




// Vending Machine Parent Component
const VendingMachine = () => {

    // const money = useContext(MoneyContext);
    // const moneyInserted = useContext(MoneyInsertedContext);

    return (
        <div className="vending-machine">
            <Display />
            <Image />
            <CostButtons />
        </div>
    )
}

export default VendingMachine