import { ImCross } from "react-icons/im";
import "./style/popcard.css"
import PopUpTransactions from "./PopUpTransactions";


const PopupCard = ({ open, setOpen, data, setData, pointer }) => {

    function closeOn(e) {
        setOpen(false);
    }

    if (open) {
        return (
            <div className="pc-backdrop" aria-modal="true" role="dialog" aria-labelledby="pc-title">
                <div className="pc-card" role="document">
                    <header className="pc-header">
                        <h3 id="pc-title" className="pc-title">
                            Edit Transactions
                        </h3>
                        <button className="btn pc-close" onClick={closeOn}><ImCross /></button>

                    </header>
                    <div className="pc-body">
                        <PopUpTransactions data={data} setData={setData} pointer={pointer} closeOn={closeOn} />
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default PopupCard