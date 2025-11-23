import { useState } from "react";
import "./style/transaction.css";
import config from "./Constants";


const PopUpTransactions = ({ data, setData, pointer, closeOn }) => {

    const fields = data[pointer.date][pointer.index];
    const [transactionState, setTransactionState] = useState(fields.symbol === "+" ? true : false);


    const incomeCategory = config.incomeCategory;
    const expenseCategory = config.expenseCategory;

    const category = transactionState ? incomeCategory : expenseCategory;



    const income = transactionState ? "btn btn-primary transaction" : "btn btn-secondary transaction";
    const expense = transactionState ? "btn btn-secondary transaction" : "btn btn-primary transaction";

    const [formData, setFormData] = useState({
        amount: "",
        symbol: transactionState ? "+" : "-",
        note: "",
        category: "",
        account: "",
    });

    async function setterV2() {
        setFormData((prev) => ({ ...prev, "amount": Number(document.getElementById("amount").value) }));
        setFormData((prev) => ({ ...prev, "category": document.getElementById("category").value }));
        setFormData((prev) => ({ ...prev, "account": document.getElementById("account").value }));
        setFormData((prev) => ({ ...prev, "note": document.getElementById("note").value }));
        setFormData((prev) => ({ ...prev, "symbol": transactionState ? "+" : "-" }));
    }

    const handleChange = (e) => {
        setterV2();

    }


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

    const handleAddTransaction = async () => {
        const symbol = transactionState ? "+" : "-";
        setter(symbol);

        setData(prev => {
            const updated = { ...prev };
            updated[pointer.date] = updated[pointer.date].map((item, i) =>
                i === pointer.index ? { ...item, ...formData } : item
            );
            return updated;
        });

        document.getElementById("category").value = "Select Category";
        document.getElementById("account").value = "Select Category";
        document.getElementById("amount").value = null;
        document.getElementById("note").value = null;
        closeOn(null);
    }

    const deleteTransaction = () => {
        setData(prev => {
            const updated = { ...prev };
            updated[pointer.date] = updated[pointer.date].filter((_, i) => i !== pointer.index);
            if (updated[pointer.date].length === 0) {
                delete updated[pointer.date];
            }

            return updated;
        });
        closeOn(null);
    };

    return (
        <div className="row transaction-section update">
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
                    <label htmlFor="amount" className="form-label" >Amount</label>
                    <input id="amount" type="number" className="form-control" placeholder="Enter Amount" defaultValue={fields.amount} onChange={handleChange} required />
                    <label htmlFor="category" className="form-label">Category</label>
                    <select id="category" className="form-select" defaultValue={fields.category} onChange={handleChange} required>
                        <option value={"Select Category"} disabled>Select Category</option>
                        {category.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                    <label htmlFor="account" className="form-label">Account</label>
                    <select id="account" className="form-select" defaultValue={fields.account} onChange={handleChange} required>
                        <option defaultValue={"Select Category"} disabled>Select Category</option>
                        <option value={"cash"}>Cash</option>
                        <option value={"bank"}>Bank</option>
                        <option value={"upi"}>UPI</option>
                    </select>
                    <label htmlFor="note" className="form-label">Note</label>
                    <input id="note" type="text" className="form-control" defaultValue={fields.note} onChange={handleChange} required />

                    <button type="button" onClick={handleAddTransaction} className="btn btn-primary submit-btn update">Update</button>
                    <button type="button" onClick={deleteTransaction} className="btn btn-danger submit-btn update">Delete</button>

                </form>
            </div>
        </div>
    )
}

export default PopUpTransactions