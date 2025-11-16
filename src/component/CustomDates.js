const CustomDates = ({ is_custom_date_enable, handleChange }) => {
    if (is_custom_date_enable) {
        return (
            <div className="col dateInput">
                <input className="datedInput  px-3 py-1 rounded" type="date" id="date" onChange={handleChange} placeholder="Custom date" />
            </div>
        )
    } else {
        return null;
    }
}

export default CustomDates