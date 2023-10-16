function PlaydateList(props) {
    return (
        <>
            <p>Soon you have playdate with</p>
            {/* create a li for each item in cart array? */}
            <ul>
                {props.playdate.map( (item, index) => { return <li key={index}>{item.name}</li> })}
            </ul>

        </>
    )
}

export default PlaydateList

