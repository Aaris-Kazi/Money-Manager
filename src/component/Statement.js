const Statement = ({ amount, symbol, note, category }) => {

    // const bg = symbol === "+" ? "bg-greenfade" : "bg-redfade";
    const textColor = symbol === "+" ? "primary" : "danger";
    let meginLeft = 0;
    if (category.length < 5) {
        meginLeft = 20 + category.length;
    } else {
        meginLeft = 32 + category.length + note.length;
    }
    console.log(note.length);
    console.log(meginLeft);
    
    
    return (
        // <div className={"row statement-section " + bg}>
        <div className={"row statement-section "}>
            <div className="col-10">
                <div className="row">

                    <h6 className="pillmargin">{note}<span className="position-absolute translate-middle badge popup rounded-pill text-bg-secondary h7" style={{"marginLeft": meginLeft + "px"}}>{category}</span></h6>
                </div>
            </div>
            <div className={"col-2 text-end " + textColor}>{symbol + amount}$</div>
        </div>
    )
}

export default Statement