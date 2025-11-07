import Footer from "../component/footer"
import Card from "../component/card"
import Notification from "../component/Notification";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Statements from "../component/Statements";
import Transactions from "../component/Transactions";
import './css/dashboard.css'

const DashBoard = () => {

    const dict = {
        income: {
            title: "Income",
            amount: 5000,
            mutedText: "This month Total Income",
            cardText: "Income are similar to last month"
        },
        expense: {
            title: "Expense",
            amount: 500,
            mutedText: "This month Total Expense",
            cardText: "Income are lesser to last month"
        },
        savings: {
            title: "Savings",
            amount: 4500,
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
                        <Transactions />
                    </div>
                    <div className="row">
                        <Statements />
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