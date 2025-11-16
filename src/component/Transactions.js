import { useState } from "react";
import "./style/transaction.css"
import CustomDates from "./CustomDates";

const Transactions = ({setData}) => {

    const [transactionState, setTransactionState] = useState(true);

    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [isCustomDateEnable, setisCustomDateEnable] = useState(false);
    const incomeCategory = ["Passive Income", "Salary", "Bonus", "Transfer", "Freelance", "Other"];
    const expenseCategory = ["Food", "Transport", "Communication", "Bills", "Health", "Social Life", "Shopping", "Investment", "Transfer"];

    const [formData, setFormData] = useState({
        amount: "",
        symbol: transactionState ? "+" : "-",
        note: "",
        category: "",
        account: "",
    });



    async function setter(symbol) {
        setFormData((prev) => ({ ...prev, "amount": Number(document.getElementById("amount").value) }));
        setFormData((prev) => ({ ...prev, "category": document.getElementById("category").value }));
        setFormData((prev) => ({ ...prev, "account": document.getElementById("account").value }));
        setFormData((prev) => ({ ...prev, "note": document.getElementById("note").value }));
        setFormData((prev) => ({ ...prev, "symbol": symbol }));


    }

    const incomeState = () => {
        setTransactionState(true);
        document.getElementById("category").value = "Select Category";
        document.getElementById("account").value = "Select Category";
        document.getElementById("amount").value = null;
        document.getElementById("note").value = null;
        setter("+");
    };

    const expenseState = () => {
        setTransactionState(false);
        document.getElementById("category").value = "Select Category";
        document.getElementById("account").value = "Select Category";
        document.getElementById("amount").value = null;
        document.getElementById("note").value = null;
        setter("-");
    };


    const category = transactionState ? incomeCategory : expenseCategory;

    const income = transactionState ? "btn btn-primary transaction" : "btn btn-secondary transaction";
    const expense = transactionState ? "btn btn-secondary transaction" : "btn btn-primary transaction";


    const handleChange = (e) => {
        const { id, value } = e.target;

        if(id === "amount"){
            setFormData((prev) => ({ ...prev, [id]: Number(value) }));
        } else if(id === "date") {
            console.log(value);
            setDate(value);
        } else {
            setFormData((prev) => ({ ...prev, [id]: value }));
        }

    }

    const handleToggleSwitch = (e) => {
        const isChecked = e.target.checked;    
        setisCustomDateEnable(isChecked);
        if (!isChecked) {
            const now = new Date().toISOString().split("T")[0];
            setDate(now);
            console.log(now);
            
        }
        
    }


    const handleAddTransaction = async () => {
        const symbol = transactionState ? "+" : "-";
        setter(symbol);

        const iso = new Date(date).toISOString();

        // console.log(iso);
        


        setData((prevData) => ({...prevData, 
            [iso] : [...(prevData[iso] || []), formData]
        }))

        document.getElementById("category").value = "Select Category";
        document.getElementById("account").value = "Select Category";
        document.getElementById("amount").value = null;
        document.getElementById("note").value = null;
    }

    return (
        <div className="row transaction-section">

            <span className="h5">Transactions</span>

            <div className="row transaction-btn-row">
                <div className="col transaction">
                    <button type="button" className={income} onClick={incomeState}>
                        INCOME
                    </button>
                </div>
                <div className="col transaction">
                    <button type="button" className={expense} onClick={expenseState}>
                        EXPENSE
                    </button>
                </div>

            </div>
            <div className="row formRow">
                <form className="forms" method="post" action={""}>

                    <div className="row">
                        <div className="row button form-check form-switch">
                            <div className="col-3">
                                <label className="form-check-label position-absolute checkLabel" htmlFor="switchCheckChecked">Custom Date</label>
                                <input className="form-check-input checkSwitch" type="checkbox" role="switch" id="switchCheckChecked" onChange={handleToggleSwitch} />
                            </div>
                            <CustomDates is_custom_date_enable={isCustomDateEnable} handleChange={handleChange} />
                        </div>
                        <div className="row input"></div>
                    </div>

                    
                    <label htmlFor="amount" className="form-label" >Amount</label>
                    <input id="amount" type="number" className="form-control" placeholder="Enter Amount"  onChange={handleChange} required />
                    <label htmlFor="category" className="form-label">Category</label>
                    <select id="category" className="form-select" defaultValue={"Select Category"} onChange={handleChange} required>
                        <option value={"Select Category"} disabled>Select Category</option>
                        {category.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                    <label htmlFor="account" className="form-label">Account</label>
                    <select id="account" className="form-select" defaultValue={"Select Category"} onChange={handleChange} required>
                        <option defaultValue={"Select Category"} disabled>Select Category</option>
                        <option value={"cash"}>Cash</option>
                        <option value={"bank"}>Bank</option>
                        <option value={"upi"}>UPI</option>
                    </select>
                    <label htmlFor="note" className="form-label">Note</label>
                    <input id="note" type="text" className="form-control" placeholder="note to regard the transations" value={formData.note} onChange={handleChange} required />

                    <button type="button" onClick={handleAddTransaction} className="btn btn-primary submit-btn">Add Transaction</button>

                </form>
            </div>
        </div>
    )
}

export default Transactions