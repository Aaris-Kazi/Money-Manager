const Statement = ({ amount, symbol, note, category }) => {

    // const bg = symbol === "+" ? "bg-greenfade" : "bg-redfade";
    const textColor = symbol === "+" ? "primary" : "danger";
    return (
        // <div className={"row statement-section " + bg}>
        <div className={"row statement-section "}>
            <div className="col-10">
                <div className="roh7w">
                    <h6>{note}<span className="position-absolute translate-middle badge popup rounded-pill text-bg-secondary h7">{category}</span></h6>
                </div>
            </div>
            <div className={"col-2 text-end " + textColor}>{symbol + amount}$</div>
        </div>
    )
}

export default Statement