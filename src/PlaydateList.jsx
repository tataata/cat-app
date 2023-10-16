function PlaydateList(props) {
    return (
        <>
            <h3>Soon you have palydate with</h3>
            {/* create a li for each item in cart array? */}
            <ul>
                {props.playDates.map( (item, index) => {
                    return <li key={index}>{item.name}</li>
                })}
            </ul>

        </>
    )
}

export default PlaydateList

