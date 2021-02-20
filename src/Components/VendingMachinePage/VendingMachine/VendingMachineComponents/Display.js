import { useContext, useEffect } from 'react';
import "./Display.scss";
import { CurrentMoneyContext, SetCurrentMoneyContext, DisplayTextContext, SetDisplayTextContext } from "../../VendingMachineContainer";

// Icon
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Display = (props) => {


    const currentMoney = useContext(CurrentMoneyContext);
    const setCurrentMoney = useContext(SetCurrentMoneyContext);

    const displayText = useContext(DisplayTextContext);
    const setDisplayText = useContext(SetDisplayTextContext);

    // useEffect(() => {
    //     setDisplayText("Please Make Your Selection")
    // }, [currentMoney])


    const refundMoney = () => {
        setCurrentMoney(0);
    }


    return (
        <div className="display">
            <div className="display-text">
                {/* {currentMoney === 0 ? "Please Make Your Selection" : currentMoney} */}
                {displayText}
            </div>
            <div className="refund-icon">
                <FiberManualRecordIcon fontSize="large" onClick={refundMoney} />
            </div>
        </div>
    )
}

export default Display
