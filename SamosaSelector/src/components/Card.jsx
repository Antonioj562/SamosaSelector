import '../styles/card.css'

const Card  = (props) => {
    const { count, setPower } = props;

    return (
        <>
        <div className='cardContainer'>
            <h3>{props.name}</h3>
            <h4>{props.numMult} Clicks: {props.x}x per click</h4>
            {count == props.numMult ? (
                <button onClick={() => setPower(props.power * props.x)}>{props.numMult} Samosas</button>
            ) : (// to do fix if else statment
                <button>{props.numMult} Samosas</button>
            )}
        </div>
        </>
    )
}

export default Card;