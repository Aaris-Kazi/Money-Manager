import Statement from "./Statement"
const StatementDay = ({ date, statements }) => {

    const totalIncome = statements
        .filter(item => item.symbol === "+")
        .reduce((sum, item) => sum + item.amount, 0);

    const totalExpense = statements
        .filter(item => item.symbol === "-")
        .reduce((sum, item) => sum + item.amount, 0);

    return (
        <div className='row statementDay'>
            <div className="row">
                <nav className="col-12 navbar">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h5">{date}</span>
                        <span className="navbar-text">
                            <span className="primary-text">{totalIncome}$</span>
                            <span className="danger-text">{totalExpense}$</span>
                        </span>
                    </div>
                </nav>
            </div>
            <div className="row">
                {statements.map((statements, index) => (

                    <Statement key={index} amount={statements.amount} symbol={statements.symbol} note={statements.note} category={statements.category} />
                ))}
            </div>
        </div>
    )
}

export default StatementDay