import { useState } from "react";
import "./style/transaction.css"

const Transactions = () => {

    const [transactionState, setTransactionState] = useState([
        true
    ]);

    const incomeState = () => setTransactionState(true);
    const expenseState = () => setTransactionState(false);

    const incomeCategory = ["Passive Income", "Salary", "Bonus", "Transfer", "Freelance", "Other"];
    const expenseCategory = ["Food", "Transport", "Communication", "Bills", "Health", "Social Life", "Shopping", "Investment", "Transfer"];

    const category = transactionState ? incomeCategory : expenseCategory;

    const income = transactionState ? "btn btn-primary transaction" : "btn btn-secondary transaction";
    const expense = transactionState ? "btn btn-secondary transaction" : "btn btn-primary transaction";

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
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input id="amount" type="number" className="form-control" placeholder="Enter Amount" required />
                    <label htmlFor="category" className="form-label">Category</label>
                    <select id="category" className="form-select" defaultValue={"Select Category"} required>
                        <option defaultValue={"Select Category"} disabled>Select Category</option>
                        {category.map((cat, index) => (
                            <option key={index} value={cat.toLowerCase()}>{cat}</option>
                        ))}
                    </select>
                    <label htmlFor="account" className="form-label">Account</label>
                    <select id="account" className="form-select" defaultValue={"Select Category"} required>
                        <option defaultValue={"Select Category"} disabled>Select Category</option>
                        <option value={"cash"}>Cash</option>
                        <option value={"bank"}>Bank</option>
                        <option value={"upi"}>UPI</option>
                    </select>
                    <label htmlFor="note" className="form-label">Note</label>
                    <input id="note" type="text" className="form-control" placeholder="note to regard the transations" required />

                    <button type="submit" className="btn btn-primary submit-btn">Add Transaction</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Transactions