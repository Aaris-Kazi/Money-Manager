
import StatementDay from "./StatementDay"
import "./style/statements.css"


const Statements = () => {

    const data = {
        "Today": [
            { amount: 20, symbol: "-", note: "Snacks", category: "Food" },
            { amount: 10, symbol: "-", note: "Water", category: "Food" },
            { amount: 200, symbol: "+", note: "Allowance", category: "Salary" }
        ],
        "04 Tue 11 2025": [
            { amount: 5, symbol: "-", note: "Chips", category: "Food" },
            { amount: 18, symbol: "-", note: "Momos", category: "Food" }
        ]
    }
    return (
        <div className="row statements-section">
            <span className="h5">Statements</span>
            <div className="row">
                {Object.entries(data).map(([date, statements], index) => (
                    <StatementDay key={index} date={date} statements={statements} />
                ))}


            </div>
        </div>
    )
}

export default Statements