function PlaydateList(props) {
    return (
        <>
            <p>You book playdate with:</p>
            {/* create a li for each item in cart array? */}
            <ul>
                {props.playdate.map( (item, index) => { return <li key={index}>{item.name} <button className="btn btn-secondary btn-sm" onClick={() => {props.cancelPlaydate(index)}}>Cancel</button></li> })}
                {/* <button onClick={() => {props.removeFromCart(index)}}>Remove</button>  */}

            </ul>
        </>
    )
}

export default PlaydateList

