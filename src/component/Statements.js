
import StatementDay from "./StatementDay"
import "./style/statements.css"


const Statements = ({data}) => {

    return (
        <div className="row statements-section">
            <span className="h5">Statements</span>
            <div className="row">
                {Object.entries(data).map(([date, statements], index) => (
                    <StatementDay key={index} dates={date} statements={statements} />
                ))}


            </div>
        </div>
    )
}

export default Statements