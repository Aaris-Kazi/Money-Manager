import Statement from "./Statement"
const StatementDay = ({ dates, statements }) => {
    const currentDate = new Date().toISOString().split("T")[0];

    const totalIncome = statements
        .filter(item => item.symbol === "+")
        .reduce((sum, item) => sum + item.amount, 0);

    const totalExpense = statements
        .filter(item => item.symbol === "-")
        .reduce((sum, item) => sum + item.amount, 0);

    // console.log(currentDate);
    

    const date = new Date(dates);

    const day = String(date.getUTCDate()).padStart(2, '0');
    const weekday = date.toLocaleString('en-US', { weekday: 'short', timeZone: 'UTC' });
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();

    const keyDate = currentDate === dates.split("T")[0] ? "Today" : `${day} ${weekday} ${month} ${year}`

    return (
        <div className='row statementDay'>
            <div className="row">
                <nav className="col-12 navbar">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h5">{keyDate}</span>
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