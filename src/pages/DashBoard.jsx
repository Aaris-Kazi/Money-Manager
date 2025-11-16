import Footer from "../component/footer"
import Card from "../component/card"
import Notification from "../component/Notification";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Statements from "../component/Statements";
import Transactions from "../component/Transactions";
import './css/dashboard.css'
import { useEffect, useState } from "react";

const DashBoard = () => {

    const [data, setData] = useState(
        {
            "2025-11-04T00:00:00.000Z": [
                { amount: 5, symbol: "-", note: "Chips", category: "Food" },
                { amount: 18, symbol: "-", note: "Momos", category: "Food" },
                { amount: 50, symbol: "+", note: "Rent", category: "Allowance" }
            ],
            "2025-11-11T00:00:00.000Z": [
                { amount: 5, symbol: "-", note: "Chips", category: "Food" },
                { amount: 18, symbol: "-", note: "Momos", category: "Food" },
                { amount: 50, symbol: "+", note: "Rent", category: "Allowance" }
            ],
            "2025-11-15T00:00:00.000Z": [
                { amount: 5, symbol: "-", note: "Chips", category: "Food" },
                { amount: 18, symbol: "-", note: "Momos", category: "Food" },
                { amount: 50, symbol: "+", note: "Rent", category: "Allowance" }
            ]
        }
    );

    const [totalIncomes, setTotalIncomes] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);

    useEffect(() => {
        let income = 0;
        let expense = 0;

        Object.entries(data).forEach(([key, value]) => {
            value.forEach(s => {
                if (s.symbol === "+") income += s.amount;
                else if (s.symbol === "-") expense += s.amount;
            })
        })

        setTotalIncomes(income);
        setTotalExpenses(expense);
    }, [data]);


    const dict = {
        income: {
            title: "Income",
            amount: totalIncomes,
            mutedText: "This month Total Income",
            cardText: "Income are similar to last month"
        },
        expense: {
            title: "Expense",
            amount: totalExpenses,
            mutedText: "This month Total Expense",
            cardText: "Income are lesser to last month"
        },
        savings: {
            title: "Savings",
            amount: totalIncomes - totalExpenses,
            mutedText: "This month Total Savings",
            cardText: "Savings are similar to last month"
        }
    };
    return (
        <div className="container nomarg-leftright">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <span className="h4">Dashboard</span>
                    </div>
                    <div className="row month-yeard">
                        <span className="h6"><FaChevronLeft className="text-muted" /> Nov 2025 <FaChevronRight /></span>
                    </div>
                    <div className="row">
                        <div className="col cardCol"><Card title={dict.income.title} amount={dict.income.amount} mutedText={dict.income.mutedText} cardText={dict.income.cardText} /></div>
                        <div className="col cardCol"><Card title={dict.expense.title} amount={dict.expense.amount} mutedText={dict.expense.mutedText} cardText={dict.expense.cardText} /></div>
                        <div className="col cardCol"><Card title={dict.savings.title} amount={dict.savings.amount} mutedText={dict.savings.mutedText} cardText={dict.savings.cardText} /></div>
                    </div>
                    <div className="row">
                        <Transactions setData={setData} />
                    </div>
                    <div className="row">
                        <Statements data={data} />
                    </div>
                </div>
                <Notification />
            </div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
            <Footer />
        </div>
    )
}

export default DashBoard